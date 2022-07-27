<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\ClientBetting;
use App\Models\Competition;
use App\Models\Team;
use http\Client\Curl\User;
use Illuminate\Http\Request;

class ClientBettingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = ClientBetting::with('competition','team','client')->paginate(request('per_page') ? request('per_page') : 25)->withQueryString();

        return response()->json(['data' => $data]);
    }

    public function app_index(){
        $data = ClientBetting::with('competition', 'team.game_category')
            ->where('client_id', request()->user()->id)
            ->orderBy('created_at','desc')
            ->get();
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
        $user = Client::find(auth('client')->user()->id);
        $competition = ClientBetting::with('competition')->where('competition_id', $request->competition_id)->first();

        if ($competition != null) {
            return redirect()->back()->with('error', 'You already had submitted bet on ' . $competition->competition->title);
        }

        if ($user->wallet < $request->bet_coins){
            return redirect()->back()->with('error', 'You dont have enough coins to bet');
        }

        $request->validate([
            'team_id' => 'required',
            'bet_coins' => 'required',
        ]);

        $model = new ClientBetting();
        $model->team_id = $request->team_id;
        $model->bet_coins = $request->bet_coins;
        $model->competition_id = $request->competition_id;
        $model->client_id = auth('client')->user()->id;

        $teams = Competition::findOrFail($request->competition_id);
        $team1 = Team::find($teams->team1_id);
        $team2 = Team::find($teams->team2_id);
        $team_data = [
            [
                'team_id' => $team1->id,
                'team_name' => $team1->title,
            ],
            [
                'team_id' => $team2->id,
                'team_name' => $team2->title,
            ]
        ];

        $model->teams = json_encode($team_data);
        $model->save();

        return redirect()->back()->with('message', 'Bet Saved Successfully');

    }

    public function app_store(Request $request)
    {
        $user = Client::find(request()->user()->id);
        $competition = ClientBetting::with('competition')->where('competition_id', $request->competition_id)->first();

        if ($competition != null) {
            return response()->json(['status' => 400,'message' =>'You already had submitted bet on ' . $competition->competition->title]);
        }

        if ($user->wallet < $request->bet_coins){
            return response()->json(['status' => 400,'message' =>'You dont have enough coins to bet']);
        }

        $model = new ClientBetting();
        $model->team_id = $request->team_id;
        $model->bet_coins = $request->bet_coins;
        $model->competition_id = $request->competition_id;
        $model->client_id = request()->user()->id;

        $teams = Competition::findOrFail($request->competition_id);
        $team1 = Team::find($teams->team1_id);
        $team2 = Team::find($teams->team2_id);
        $team_data = [
            [
                'team_id' => $team1->id,
                'team_name' => $team1->title,
            ],
            [
                'team_id' => $team2->id,
                'team_name' => $team2->title,
            ]
        ];

        $model->teams = json_encode($team_data);
        $model->save();

        return response()->json(['status' => 200,'message' =>'Bet Created Successfully']);
    }

    public function delete(Request $request, $id)
    {
        ClientBetting::find($id)->delete();
        return redirect()->back();
    }

    public function app_delete(Request $request, $id)
    {
        ClientBetting::find($id)->delete();
        return response()->json(['status' => 200,'message' =>'Bet Removed Successfully']);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\ClientBetting $cLientBetting
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = ClientBetting::with('competition','team','client')->findOrFail($id);

        return response()->json([
            "data" => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\ClientBetting $cLientBetting
     * @return \Illuminate\Http\Response
     */
    public function edit(ClientBetting $cLientBetting)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\ClientBetting $cLientBetting
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $competition = Competition::find($request->competition_id);
        if($competition->completed == 1){
            return redirect()->back()->with('error', 'The competition between '.$competition->title.' has been ended');
        }
        $user = Client::find(auth('client')->user()->id);
        if (((int) $user->wallet < (int) $request->bet_coins) && (int) $request->status == 1){
            return redirect()->back()->with('error', 'You dont have enough coins to bet');
        } else {
            $user->wallet = $user->wallet - (int) $request->bet_coins;
            $user->save();
        }

        $model = ClientBetting::findOrFail($id);
        $model->team_id = $request->team_id;
        $model->bet_coins = $request->bet_coins;
        $model->status = $request->status;
        $model->save();
        return redirect()->back()->with('message', 'Saved Successfully');
    }

    public function app_update(Request $request, $id)
    {
        $competition = Competition::find($request->competition_id);
        if($competition->completed == 1){
            return response()->json(['status' => 400,'message' =>'The competition between '.$competition->title.' has been ended']);
        }
        $user = Client::find(request()->user()->id);
        if ((int) $request->status == 1) {
            if (((int)$user->wallet < (int)$request->bet_coins)) {
                return response()->json(['status' => 400, 'message' => 'You dont have enough coins to lock bet']);
            } else {
                $user->wallet = $user->wallet - (int)$request->bet_coins;
                $user->save();
            }
        }

        $model = ClientBetting::findOrFail($id);
        $model->team_id = $request->team_id;
        $model->bet_coins = $request->bet_coins;
        $model->status = $request->status;
        $model->save();
        return response()->json(['status' => 200,'message' =>($request->status == 1?'Bet Lock':'Bet Update').' Successfully','user' =>$user]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\ClientBetting $cLientBetting
     * @return \Illuminate\Http\Response
     */
    public function destroy(ClientBetting $cLientBetting)
    {
        //
    }
}
