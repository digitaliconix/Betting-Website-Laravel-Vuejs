<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Mail\UserCreateMail;
use App\Models\Client;
use App\Models\Counter;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Str;

class ClientController extends Controller
{

    public function dashboard()
    {
        $model_id = auth()->user()->id;
        $data['help_requests'] = DB::select('select hrs.id, hrs.title,  count(hr.id) as hr_count from help_request_statuses hrs left join help_requests hr on hrs.id=hr.status_id where hr.model_type LIKE "%Client" and hr.model_id = '.$model_id.' GROUP BY hrs.id');

        return response()->json([
            'data' => $data
        ]);
    }


    public function admin_index()
    {
        $data = Client::orderBy('id', 'DESC')
            ->paginate(request('per_page') ? request('per_page') : 25);

        return response()->json([
            "data" => $data
        ]);
    }

    public function admin_show($id)
    {
        $data = Client::with('package_orders.package','bettings.competition','bettings.team','orders.product')->findOrFail($id);

        return response()->json([
            "data" => $data
        ]);
    }

    public function admin_store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:client_users'],
            'phone_no' => ['required', 'string', 'max:20'],
            'client_type_id' => ['required', 'numeric', 'exists:client_types,id'],
            'country_id' => ['required', 'numeric', 'exists:countries,id'],
            'state_id' => ['required', 'numeric', 'exists:states,id'],
            'city_id' => ['required', 'numeric', 'exists:cities,id'],
            'zip_code' => ['required', 'numeric'],
        ]);

        $pass = Str::random(12);
        $user = new Client();
        $user = DB::transaction(function () use ($user, $pass, $request) {
            $counter = Counter::where('key', 'client')->first();
            $number = Str::padLeft($counter->value, 5, '0');
            $user_code = $counter->prefix . $number;
            $user->fill($request->all());
            $user->user_code = $user_code;
            $user->password = $pass;
            $user->email_verified_at = now();
            $user->save();
            $user->syncRoles(['Default']);
            $counter->increment('value');
            return $user;
        });

        $data = [
            "name" => $user->name,
            "email" => $user->email,
            "password" => $pass
        ];

        Mail::to($data['email'])->send(new UserCreateMail($data));

        return response()->json(["saved" => true, "password" => $pass]);

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }


    public function edit_detail()
    {
        $model = Client::with(['client_type', 'country', 'state', 'city'])->findOrFail(auth('client')->user()->id);
        Arr::set($model, 'old_photo', $model->photo ? $model->photo : null);
        return response()->json(['form' => $model]);
    }

    public function update_detail(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:client_users,email,' . auth('client')->user()->id,
            'name' => 'required',
            'phone_no' => ['required', 'string', 'max:20'],
            'client_type_id' => ['required', 'numeric', 'exists:client_types,id'],
            'country_id' => ['required', 'numeric', 'exists:countries,id'],
            'state_id' => ['required', 'numeric', 'exists:states,id'],
            'city_id' => ['required', 'numeric', 'exists:cities,id'],
            'zip_code' => ['required', 'numeric'],
            'new_password' => [
                'required_if:change_password,true',
                'string',
                'min:8',              // must be at least 10 characters in length
                'regex:/[a-z]/',      // must contain at least one lowercase letter
                'regex:/[A-Z]/',      // must contain at least one uppercase letter
                'regex:/[0-9]/',],
            'password_confirmation' => ['required_if:change_password,true', 'same:new_password'],
        ]);
        DB::transaction(function () use ($request) {
            $model = Client::findOrFail(auth('client')->user()->id);
            $model->fill($request->except('photo'));
            if ($request->change_password == "true") {
                $model->password = $request->new_password;
            }
            if ($request->hasFile('photo')) {
                $photo = $request->file('photo');
                $photo_filename = time() . $photo->getClientOriginalName();
                upload('local', $photo, '/profile/', $photo_filename);
                deleteFile('local', '/profile/', $request->old_photo);
                $model->photo = $photo_filename;
            }
            $model->save();
        });

        return response()->json(['saved' => true]);

    }

    public function showAttachment($folder, $filename)
    {
        $path = storage_path() . "/app/public/" . $folder . "/" . $filename;
        if (!File::exists($path)) {
            abort(404);
        }

        $file = File::get($path);
        $type = File::mimeType($path);

        $response = Response::make($file, 200);
        $response->header("Content-Type", $type);
        return $response;
    }
}
