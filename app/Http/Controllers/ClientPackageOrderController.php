<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\ClientPackageOrder;
use App\Models\Package;
use Illuminate\Http\Request;

class ClientPackageOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function app_index()
    {
        $data = ClientPackageOrder::with('package')->orderBy('created_at', 'desc')->get();

        return response()->json(['data' => $data]);
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

    public function app_store(Request $request)
    {
        $model = new ClientPackageOrder();
        $model->fill($request->all());
        $model->paypal_response = json_decode($request->paypal_response);
        $model->client_id = request()->user()->id;
        $model->save();

        $package = Package::findOrFail($request->package_id);

        $client_data = Client::findOrFail(request()->user()->id);
        $client_data->wallet = $client_data->wallet + (int)$package->coins;
        $client_data->save();

        return response()->json(['status' => 200, 'message' => 'Thankyou for order.', 'user' => $client_data]);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\ClientPackageOrder $clientPackageOrder
     * @return \Illuminate\Http\Response
     */
    public function show(ClientPackageOrder $clientPackageOrder)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\ClientPackageOrder $clientPackageOrder
     * @return \Illuminate\Http\Response
     */
    public function edit(ClientPackageOrder $clientPackageOrder)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\ClientPackageOrder $clientPackageOrder
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ClientPackageOrder $clientPackageOrder)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\ClientPackageOrder $clientPackageOrder
     * @return \Illuminate\Http\Response
     */
    public function destroy(ClientPackageOrder $clientPackageOrder)
    {
        //
    }
}
