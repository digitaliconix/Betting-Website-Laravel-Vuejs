<?php

namespace App\Http\Controllers;

use App\Models\ShopProduct;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class ShopProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = ShopProduct::with('shop_category')->paginate(request('per_page') ? request('per_page') : 25)->withQueryString();

        return response()->json(['data' => $data]);
    }


    public function app_index()
    {
        $data = ShopProduct::get();

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
            'thumbnail' => null,
            'shop_category_id' => null,
            'shop_category' => null,
            'unit_price' => null,
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
            'shop_category_id' => ['required'],
            'unit_price' => ['required', 'numeric'],
            'thumbnail' => ['required'],
        ]);

        $model = new ShopProduct();
        $model->fill($request->except(['thumbnail']));
        $model->slug = Str::slug($model->title);
        if ($request->hasFile('thumbnail')){
            $thumbnail = $request->file('thumbnail');
            $thumbnail_filename = time().$thumbnail->getClientOriginalName();
            upload('local',$thumbnail,'/shop_product/',$thumbnail_filename);
            $model->thumbnail = $thumbnail_filename;
        }
        $model->save();

        return response()->json(['saved' => true]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ShopProduct  $shopProduct
     * @return \Illuminate\Http\Response
     */
    public function show(ShopProduct $shopProduct)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ShopProduct  $shopProduct
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $form = ShopProduct::with('shop_category')->findOrFail($id);
        Arr::set($form,'old_thumbnail',$form->thumbnail);

        return response()->json(['form'=>$form]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ShopProduct  $shopProduct
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'shop_category_id' => ['required'],
            'unit_price' => ['required', 'numeric'],
        ]);
        $model = ShopProduct::findOrFail($id);
        $model->fill($request->except(['thumbnail']));
        $model->slug = Str::slug($model->title);
        if ($request->hasFile('thumbnail')){
            $thumbnail = $request->file('thumbnail');
            $thumbnail_filename = time().$thumbnail->getClientOriginalName();
            upload('local',$thumbnail,'/shop_product/',$thumbnail_filename);
            deleteFile('local','/shop_product/',$request->old_thumbnail);
            $model->thumbnail = $thumbnail_filename;
        }
        $model->save();

        return response()->json(['saved' => true]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ShopProduct  $shopProduct
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $model = ShopProduct::findOrFail($id);
        $model->status = 0;
        $model->save();

        return response()->json(['deleted' => true]);
    }
}
