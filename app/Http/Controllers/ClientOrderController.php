<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\ClientOrder;
use App\Models\ShopProduct;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ClientOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = ClientOrder::with('product','client')->paginate(request('per_page') ? request('per_page') : 25)->withQueryString();

        return response()->json(['data' => $data]);
    }

    public function app_index()
    {
        $data = ClientOrder::with('product','client')->orderBy('created_at','desc')->get();

        return response()->json(['data' => $data]);
    }

    public function app_store(Request $request)
    {
        $user = Client::find(request()->user()->id);
        $product = ShopProduct::findOrFail($request->product_id);
        if ((int)$user->wallet < (int)$product->unit_price) {
            return response()->json(['status' => 400,'message' =>'You dont have enough coins to purchase ' . $product->title]);
        }
        $model = new ClientOrder();
        DB::transaction(function () use ($request, $user, $model) {
            $product = ShopProduct::findOrFail($request->product_id);
            $model->fill($request->all());
            $model->order_number = uniqid("ON");
            $model->client_id = request()->user()->id;
            $model->save();
            $user->wallet = $user->wallet - (int)$product->unit_price;
            $user->save();
        });

        return response()->json(['status' => 200,'message' =>'Thankyou for order. Your order number is ' .  $model->order_number]);
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
     * @param  \App\Models\ClientOrder  $clientOrder
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = ClientOrder::with('product','client')->findOrFail($id);

        return response()->json([
            "data" => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ClientOrder  $clientOrder
     * @return \Illuminate\Http\Response
     */
    public function edit(ClientOrder $clientOrder)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ClientOrder  $clientOrder
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ClientOrder $clientOrder)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ClientOrder  $clientOrder
     * @return \Illuminate\Http\Response
     */
    public function destroy(ClientOrder $clientOrder)
    {
        //
    }
}
