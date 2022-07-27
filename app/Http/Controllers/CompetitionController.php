<?php

namespace App\Http\Controllers;

use App\Models\Competition;
use App\Models\GameCategory;
use Illuminate\Http\Request;

class CompetitionController extends Controller
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
        $data = Competition::with(['game_category', 'team_1', 'team_2'])
            ->orderBy('completed','asc')
            ->orderBy('start_time','asc')
            ->paginate(request('per_page') ? request('per_page') : 25)->withQueryString();

        return response()->json(['data' => $data]);
    }

    public function app_index(Request $request,$id){
        $game_category = GameCategory::find($id);
        $competition = Competition::with('game_category','team_1', 'team_2','client_bet_slip.team')
            ->orderBy('start_time', 'asc')
            ->whereDate('start_time',date('Y-m-d'))
            ->where('game_category_id', $game_category->id)
            ->get();

        return response()->json(['data' => $competition]);
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
            'game_category_id' => null,
            'game_category' => null,
            'team1_id' => null,
            'team_1' => null,
            'team2_id' => null,
            'team_2' => null,
            'team1_score' => null,
            'team2_score' => null,
            'start_time' => null
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
            'team1_id' => ['required'],
            'team2_id' => ['required'],
            'start_time' => ['required'],
        ]);

        $model = new Competition();
        $model->fill($request->all());
        $model->save();

        return response()->json(['saved' => true]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Competition  $competition
     * @return \Illuminate\Http\Response
     */
    public function show(Competition $competition)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Competition  $competition
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $form = Competition::with(['game_category', 'team_1', 'team_2'])->findOrFail($id);

        return response()->json(['form'=>$form]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Competition  $competition
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'game_category_id' => ['required'],
            'team1_id' => ['required'],
            'team2_id' => ['required'],
            'start_time' => ['required'],
        ]);

        $model = Competition::findOrFail($id);
        $model->fill($request->all());
        $model->save();

        return response()->json(['saved' => true]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Competition  $competition
     * @return \Illuminate\Http\Response
     */
    public function destroy(Competition $competition)
    {
        //
    }
}
