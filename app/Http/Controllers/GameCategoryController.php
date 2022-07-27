<?php

namespace App\Http\Controllers;

use App\Models\GameCategory;
use Illuminate\Http\Request;

class GameCategoryController extends Controller
{

    public function typeahead()
    {
        $data = GameCategory::orderBy('id')
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
        $data = GameCategory::paginate(request('per_page') ? request('per_page') : 25)->withQueryString();

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
     * @param  \App\Models\GameCategory  $gameCategory
     * @return \Illuminate\Http\Response
     */
    public function show(GameCategory $gameCategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\GameCategory  $gameCategory
     * @return \Illuminate\Http\Response
     */
    public function edit(GameCategory $gameCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\GameCategory  $gameCategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, GameCategory $gameCategory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\GameCategory  $gameCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(GameCategory $gameCategory)
    {
        //
    }
}
