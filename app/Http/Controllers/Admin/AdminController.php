<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\CareGiver;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;

class AdminController extends Controller
{
    public function dashboard()
    {

        $minus_day = now()->subtract('days',1)->toDateTimeString();
        $data['client_types'] = DB::select('select ct.id, ct.title, count(cu.id) as cu_count from client_types ct left join client_users cu on ct.id = cu.client_type_id GROUP BY ct.id');
        $data['today_client_types'] = DB::select("select ct.id, ct.title, count(cu.id) as cu_count from client_types ct left join client_users cu on ct.id = cu.client_type_id where cu.created_at > '".$minus_day."' GROUP BY ct.id");
        $data['all_clients'] = Client::count();
        $data['today_clients'] = Client::where('created_at','>',$minus_day)->count();

        $data['care_giver_types'] = DB::select('select ct.id, ct.title, count(cu.id) as cu_count from care_giver_types ct left join care_giver_users cu on ct.id = cu.care_giver_type_id GROUP BY ct.id');
        $data['today_care_giver_types'] = DB::select("select ct.id, ct.title, count(cu.id) as cu_count from care_giver_types ct left join care_giver_users cu on ct.id = cu.care_giver_type_id where cu.created_at > '".$minus_day."' GROUP BY ct.id");
        $data['all_care_givers'] = CareGiver::count();
        $data['today_care_givers'] = CareGiver::where('created_at','>',$minus_day)->count();

        $data['help_requests'] = DB::select('select hrs.id, hrs.title,  count(hr.id) as hr_count from help_request_statuses hrs left join help_requests hr on hrs.id=hr.status_id GROUP BY hrs.id');

        return response()->json([
            'data' => $data
        ]);

    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Admin::with('roles')->paginate(request('per_page') ? request('per_page') : 25);
        return response()->json(['data' => $data]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $form  = [
            'name' => '',
            'email' => '',
            'password' => '',
            'password_confirmation' => ''
        ];

        return response()->json(['form' => $form]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:admin_users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        $model = new Admin();
        $model->fill($request->all());
        $model->save();

        return response()->json(['saved' => true]);

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
        $model = Admin::findOrFail($id);

        return response()->json(['form'=>$model]);
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
        $request->validate([
            'new_password' => [
                'required',
                'string',
//                'confirmed',
                'min:8',              // must be at least 10 characters in length
                'regex:/[a-z]/',      // must contain at least one lowercase letter
                'regex:/[A-Z]/',      // must contain at least one uppercase letter
                'regex:/[0-9]/',],
            'password_confirmation' => ['same:new_password'],
        ]);

        Admin::findOrFail($id)->update(['password'=> $request->new_password]);

        return response()->json(['saved' =>true],200);
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
        $model = Admin::findOrFail(auth('admin')->user()->id);
        Arr::set($model, 'old_photo', $model->photo ? $model->photo : null);
        return response()->json(['form' => $model]);
    }

    public function update_detail(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:admin_users,email,' . auth('admin')->user()->id,
            'name' => 'required',
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
            $model = Admin::findOrFail(auth('admin')->user()->id);
            $model->email = $request->email;
            $model->name = $request->name;
            if($request->change_password == "true"){
                $model->password = $request->new_password;
            }
            if ($request->hasFile('photo')){
                $photo = $request->file('photo');
                $photo_filename = time().$photo->getClientOriginalName();
                upload('local',$photo,'/public/admin_profile/',$photo_filename);
                deleteFile('local','/public/admin_profile/',$request->old_photo);
                $model->photo = $photo_filename;
            }
            $model->save();
        });

        return response()->json(['saved' => true]);

    }

}
