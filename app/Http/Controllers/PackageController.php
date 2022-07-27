<?php

namespace App\Http\Controllers;

use App\Models\Package;
use Illuminate\Http\Request;

class PackageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Package::paginate(request('per_page') ? request('per_page') : 25)->withQueryString();

        return response()->json(['data' => $data]);
    }



    public function app_index()
    {
        $data = Package::where('status', 1)->get();
        return response()->json(['data'=>$data]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $form = [
            'title' => null,
            'price' => null,
            'coins' => null,
            'description' => null,
            'status' => 1
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
            'title' => ['required', 'string', 'max:255'],
            'price' => ['required'],
            'coins' => ['required'],
            'description' => ['required'],
        ]);

        $model = new Package();
        $model->fill($request->all());
        $model->save();

        return response()->json(['saved' => true]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Package  $package
     * @return \Illuminate\Http\Response
     */
    public function show(Package $package)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Package  $package
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $form = Package::findOrFail($id);

        return response()->json(['form'=>$form]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Package  $package
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'price' => ['required'],
            'coins' => ['required'],
            'description' => ['required'],
        ]);

        $model = Package::findOrFail($id);
        $model->fill($request->all());
        $model->save();

        return response()->json(['saved' => true]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Package  $package
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $model = Package::findOrFail($id);
        $model->status = 0;
        $model->save();

        return response()->json(['deleted' => true]);
    }
}
