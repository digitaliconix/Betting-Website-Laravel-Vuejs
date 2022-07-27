<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Permissions;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Http\Request;

class PermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function search()
    {
        return response()->json(['data' => Permissions::where('status', 1)->get()]);
    }

    public function get_roles()
    {
        $data = Role::where('guard_name', auth()->user()->getGuarded())
            ->when(request('q'), function ($query) {
                $query->where('name', 'like', '%' . request('q') . '%');
            })->get();
        return response()->json(['data' => $data]);
    }

    public function update_admin_roles(Request $request)
    {
        $admin_user = Admin::findOrFail($request->id);
        $collection_roles = collect($request->roles);
        $roles = $collection_roles->pluck('name');
        $admin_user->syncRoles($roles);

        return response()->json(['saved' => true]);
    }

    public function index()
    {
//        if (!auth()->user()->can('view role_permission')) {
//            return unAuthorized();
//        }
        $data = Role::where('guard_name', auth()->user()->getGuarded())->paginate(25);

        return response()->json(['data' => $data]);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
//        if (!auth()->user()->can('add role_permission')) {
//            return unAuthorized();
//        }

        $permissions = Permission::where('guard_name', auth()->user()->getGuarded())->get();

        $form = [
            'name' => null,
            'guard_name' => auth()->user()->getGuarded(),
            'permissions' => []
        ];

        return response()->json(['form' => $form, 'permissions' => $permissions]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
//        if (!auth()->user()->can('add role_permission')) {
//            return unAuthorized();
//        }

        $request->validate([
            'name' => 'required'
        ]);

        $role = new Role();
        $role->fill($request->except('permissions'));
        $role->syncPermissions($request->permissions);
        $role->save();

//        for ($i = 0; $i < count($request['permissions']); $i++) {
//            if (isset($request['permissions'][$i]['checked'])) {
//                if ($request['permissions'][$i]['checked']) {
//                    array_push($permissions_id, $request['permissions'][$i]['id']);
//                }
//            }
//        }

//        if (count($permissions_id) > 0) {
//            $permissions = Permission::whereIn('id', $permissions_id)->get();
//        }

        return response()->json(['saved' => true]);


    }

    /**
     * Display the specified resource.
     *
     * @param \App\Permissions $permissions
     * @return \Illuminate\Http\Response
     */
    public function show(Permissions $permissions)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Permissions $permissions
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $permissions = Permission::where('guard_name', auth()->user()->getGuarded())->get();
        $role = Role::findById($id);
        $role_permissions = $role->permissions()->get();

        $form = [
            'name' => $role->name,
            'guard_name' => auth()->user()->getGuarded(),
            'permissions' => collect($role_permissions)->pluck('name')
        ];

        return response()->json(['form' => $form, 'permissions' => $permissions]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Permissions $permissions
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
//        if (!auth()->user()->can('edit role_permission')) {
//            return unAuthorized();
//        }
//        $permissions_id = [];

        $role = Role::findById($id);
        $role->fill($request->except(['permissions', 'role_permissions']));
        $role->syncPermissions($request->permissions);
        $role->save();

//        for ($i = 0; $i < count($request['permissions']); $i++) {
//            if (isset($request['permissions'][$i]['checked'])) {
//                if ($request['permissions'][$i]['checked']) {
//                    array_push($permissions_id, $request['permissions'][$i]['id']);
//                }
//            }
//        }
//
//        if (count($permissions_id) > 0) {
//            $permissions = Permission::whereIn('id', $permissions_id)->get();
//            $role->syncPermissions($permissions);
//        }

        return response()->json(['saved' => true]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Permissions $permissions
     * @return \Illuminate\Http\Response
     */
    public function destroy(Permissions $permissions)
    {
        //
    }

    public function assign()
    {
        $permissions = Permission::all();

        $role = Role::findById(1);

        $role->syncPermissions($permissions);

//        dd($role);

        return response()->json(['data' => auth()->user()->allPermissions()]);
//        if(auth()->user()->can('view permission')){
//            dd(true);
//        }else{}

    }
}
