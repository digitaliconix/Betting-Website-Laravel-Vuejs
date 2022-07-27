<?php

namespace App\Http\Controllers;

use App\Models\ShopCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class ShopCategoryController extends Controller
{

    public function typeahead()
    {
        $data = ShopCategory::orderBy('id')
            ->when(request('q'),function($q){
                $q->where('title','LIKE', '%'.request('q').'%');
            })->limit(6)->get();

        return response()->json([
            "data" => $data
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = ShopCategory::paginate(request('per_page') ? request('per_page') : 25)->withQueryString();

        return response()->json(['data' => $data]);
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
            'thumbnail' => ['required'],
        ]);

        $model = new ShopCategory();
        $model->fill($request->except(['thumbnail']));
        $model->slug = Str::slug($model->title);
        if ($request->hasFile('thumbnail')){
            $thumbnail = $request->file('thumbnail');
            $thumbnail_filename = time().$thumbnail->getClientOriginalName();
            upload('local',$thumbnail,'/shop_category/',$thumbnail_filename);
            $model->thumbnail = $thumbnail_filename;
        }
        $model->save();

        return response()->json(['saved' => true]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ShopCategory  $shopCategory
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ShopCategory  $shopCategory
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $form = ShopCategory::findOrFail($id);
        Arr::set($form,'old_thumbnail',$form->thumbnail);

        return response()->json(['form'=>$form]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ShopCategory  $shopCategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => ['required', 'string', 'max:255'],
        ]);

        $model = ShopCategory::findOrFail($id);
        $model->fill($request->except(['thumbnail']));
        $model->slug = Str::slug($model->title);
        if ($request->hasFile('thumbnail')){
            $thumbnail = $request->file('thumbnail');
            $thumbnail_filename = time().$thumbnail->getClientOriginalName();
            upload('local',$thumbnail,'/shop_category/',$thumbnail_filename);
            deleteFile('local','/shop_category/',$request->old_thumbnail);
            $model->thumbnail = $thumbnail_filename;
        }
        $model->save();

        return response()->json(['saved' => true]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ShopCategory  $shopCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $model = ShopCategory::findOrFail($id);
        $model->status = 0;
        $model->save();

        return response()->json(['deleted' => true]);
    }
}
