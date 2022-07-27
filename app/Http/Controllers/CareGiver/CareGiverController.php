<?php

namespace App\Http\Controllers\CareGiver;

use App\Http\Controllers\Controller;
use App\Mail\UserCreateMail;
use App\Models\CareGiver;
use App\Models\Counter;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Str;

class CareGiverController extends Controller
{

    public function admin_index()
    {
        $data = CareGiver::with(['country', 'state', 'city', 'care_giver_type'])
            ->where(function ($q) {
                $q->when(request('q'), function ($q) {
                    $q->where('name', 'LIKE', '%'.request('q').'%')
                        ->orWhere('email', 'LIKE', '%'.request('q').'%');
                });
            })->when(request('care_giver_type_id') && request('care_giver_type_id') > 0, function ($q) {
                $q->where('care_giver_type_id', request('care_giver_type_id'));
            })->when(request('country_id'), function ($q) {
                $q->where('country_id', request('country_id'));
            })->when(request('state_id'), function ($q) {
                $q->where('state_id', request('state_id'));
            })->when(request('city_id'), function ($q) {
                $q->where('city_id', request('city_id'));
            })->orderBy('id', 'DESC')
            ->paginate(request('per_page') ? request('per_page') : 25);

        return response()->json([
            "data" => $data
        ]);
    }

    public function admin_store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:care_giver_users'],
            'phone_no' => ['required', 'string', 'max:20'],
            'care_giver_type_id' => ['required', 'numeric', 'exists:care_giver_types,id'],
            'country_id' => ['required', 'numeric', 'exists:countries,id'],
            'state_id' => ['required', 'numeric', 'exists:states,id'],
            'city_id' => ['required', 'numeric', 'exists:cities,id'],
            'zip_code' => ['required', 'numeric'],
        ]);
        $pass = Str::random(12);
        $user = new CareGiver();
        $user = DB::transaction(function () use ($user,$pass,$request) {
            $counter = Counter::where('key', 'care_giver')->first();
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }


    public function edit_detail()
    {
        $model = CareGiver::with(['care_giver_type','country','state','city'])->findOrFail(auth('care_giver')->user()->id);
        Arr::set($model, 'old_photo', $model->photo ? $model->photo : null);
        return response()->json(['form' => $model]);
    }

    public function update_detail(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:care_giver_users,email,' . auth('care_giver')->user()->id,
            'name' => 'required',
            'phone_no' => ['required', 'string', 'max:20'],
            'care_giver_type_id' => ['required', 'numeric', 'exists:care_giver_types,id'],
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
            $model = CareGiver::findOrFail(auth('care_giver')->user()->id);
            $model->fill($request->except('photo'));
            if($request->change_password == "true"){
                $model->password = $request->new_password;
            }
            if ($request->hasFile('photo')){
                $photo = $request->file('photo');
                $photo_filename = time().$photo->getClientOriginalName();
                upload('local',$photo,'/public/care_giver_profile/',$photo_filename);
                deleteFile('local','/public/care_giver_profile/',$request->old_photo);
                $model->photo = $photo_filename;
            }
            $model->save();
        });

        return response()->json(['saved' => true]);

    }

    public function showAttachment($folder,$filename)
    {
        $path = storage_path() . "/app/public/".$folder."/". $filename;
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
