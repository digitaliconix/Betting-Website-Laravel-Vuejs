<?php

namespace App\Http\Controllers;

use App\Models\GameCategory;
use App\Models\Team;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class TeamController extends Controller
{
    public function typeahead()
    {
        $data = Team::orderBy('id')
            ->when(request('game_category'), function($q){
                $q->where('game_category_id', request('game_category'));
            })
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
        $data = Team::with('game_category')->when(request('game_category'), function ($q){
            $q->where('game_category_id', request('game_category'));
        })->paginate(request('per_page') ? request('per_page') : 25)->withQueryString();

        return response()->json(['data' => $data]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $game_category = GameCategory::find(request('game_category_id'));

        $form = [
            'title' => null,
            'thumbnail' => null,
            'game_category_id' => $game_category != null ? $game_category->id : null,
            'game_category' => $game_category,
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
            'game_category_id' => ['required'],
            'thumbnail' => ['required'],
            'status' => ['required'],
        ]);

        $model = new Team();
        $model->fill($request->except(['thumbnail']));
//        $model->slug = Str::slug($model->title);
        if ($request->hasFile('thumbnail')){
            $thumbnail = $request->file('thumbnail');
            $thumbnail_filename = time().$thumbnail->getClientOriginalName();
            upload('local',$thumbnail,'/team/',$thumbnail_filename);
            $model->thumbnail = $thumbnail_filename;
        }
        $model->save();

        return response()->json(['saved' => true]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Team  $team
     * @return \Illuminate\Http\Response
     */
    public function show(Team $team)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Team  $team
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $form = Team::with('game_category')->findOrFail($id);
        Arr::set($form,'old_thumbnail',$form->thumbnail);

        return response()->json(['form'=>$form]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Team  $team
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'status' => ['required'],
            'game_category_id' => ['required'],
        ]);

        $model = Team::findOrFail($id);
        $model->fill($request->except(['thumbnail']));
        if ($request->hasFile('thumbnail')){
            $thumbnail = $request->file('thumbnail');
            $thumbnail_filename = time().$thumbnail->getClientOriginalName();
            upload('local',$thumbnail,'/team/',$thumbnail_filename);
            if($request->old_thumbnail != 'no-image.png'){
                deleteFile('local','/team/',$request->old_thumbnail);
            }
            $model->thumbnail = $thumbnail_filename;
        }
        $model->save();

        return response()->json(['saved' => true]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Team  $team
     * @return \Illuminate\Http\Response
     */
    public function destroy(Team $team)
    {
        //
    }
}
