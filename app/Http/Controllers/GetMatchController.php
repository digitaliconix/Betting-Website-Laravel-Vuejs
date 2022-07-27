<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\ClientBetting;
use App\Models\Competition;
use App\Models\Configuration;
use App\Models\GameCategory;
use App\Models\Team;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class GetMatchController extends Controller
{
    public function get_match()
    {
        $games = GameCategory::get();
        $api_key = Configuration::where('key','rapid_api')->first();
        foreach ($games as $game){
            $response = Http::withHeaders([
                'X-RapidAPI-Host' => 'odds.p.rapidapi.com',
                'X-RapidAPI-Key' => $api_key->value
            ])->get('https://odds.p.rapidapi.com/v4/sports/'.$game->key.'/scores');

            $data = json_decode($response->body());


            foreach ($data as $match){
                $prev_match = Competition::where('api_id', $match->id)->first();
                if($prev_match ==  null){
                    $team_1 = Team::where('title',$match->home_team)->first();
                    if($team_1 == null){
                        $team_1 = new Team();
                        $team_1->title = $match->home_team;
                        $team_1->thumbnail = 'no-image.png';
                        $team_1->game_category_id = $game->id;
                        $team_1->slug = Str::slug($match->home_team);
                        $team_1->save();
                    }
                    $team_2 = Team::where('title',$match->away_team)->first();
                    if($team_2 == null){
                        $team_2 = new Team();
                        $team_2->title = $match->away_team;
                        $team_2->thumbnail = 'no-image.png';
                        $team_2->game_category_id = $game->id;
                        $team_2->slug = Str::slug($match->away_team);
                        $team_2->save();
                    }
                    $model = new Competition();
                    $model->api_id = $match->id;
                    $model->title = $match->home_team.' vs. '.$match->away_team;
                    $model->game_category_id = $game->id;
                    $model->team1_id = $team_1->id;
                    $model->team2_id = $team_2->id;
                    $model->team1_score = 0;
                    $model->team2_score = 0;
                    $model->start_time = Carbon::parse($match->commence_time)->subHours(5);
                    $model->save();
                }
            }
        }

        return response()->json([
            "saved" => true
        ]);

    }

    public function get_score()
    {
        $games = GameCategory::get();
        $api_key = Configuration::where('key','rapid_api')->first();
        foreach ($games as $game){
            $response = Http::withHeaders([
                'X-RapidAPI-Host' => 'odds.p.rapidapi.com',
                'X-RapidAPI-Key' => $api_key->value
            ])->get('https://odds.p.rapidapi.com/v4/sports/'.$game->key.'/scores',[
                'daysFrom' => 1
            ]);

            $data = json_decode($response->body());
            foreach ($data as $match){
                $data_match = Competition::where('api_id', $match->id)->first();
                if($data_match && $data_match->completed == 0){
                    if($match->scores != null){
                        $data_match->team1_score = (int)$match->scores[0]->score;
                        $data_match->team2_score = (int)$match->scores[1]->score;
                        $data_match->completed = $match->completed;
                        $data_match->save();
                        if ($match->completed){
                            $this->announce_winner($data_match);
                        }
                    }
                }
            }
        }

        return response()->json([
                    "saved" => true
                ]);

    }

    public function announce_winner($match){
        $winning_team = null;
        if ($match->team1_score > $match->team2_score){
            $winning_team = $match->team1_id;
        } else {
            $winning_team = $match->team2_id;
        }
        $client_bettings = ClientBetting::where('competition_id',$match->id)->get();
        foreach ($client_bettings as $client_betting){
            $update = ClientBetting::findOrFail($client_betting->id);
            if ($client_betting->team_id == $winning_team){
                $update->bet_status = 1;
                $user = Client::find($client_betting->client_id);
                $user->wallet = $user->wallet + ((int)$client_betting->bet_coins*2);
                $user->save();
            } else {
                $update->bet_status = 0;
            }
            $update->save();
        }
    }



    public function demo()
    {
        $data = "";

        $response = json_decode($data);

        $teams = $response->sports[0]->leagues[0]->teams;

        foreach ($teams as $team)
        {
            $model = new Team();
            $model->title = $team->team->displayName;
            $model->slug = $team->team->slug;
            $model->abbreviation = $team->team->abbreviation;
            $model->location = $team->team->location;
            $model->short_title = $team->team->shortDisplayName;
            $model->game_category_id = 3;

            $image = file_get_contents($team->team->logos[0]->href);
            file_put_contents(storage_path('app/team/'.$team->team->slug.'.png'), $image);
            $model->thumbnail = $team->team->slug.'.png';
            $model->save();

        }

//        $image = file_get_contents('https://a.espncdn.com/i/teamlogos/mlb/500/atl.png');
//
//        file_put_contents(storage_path('app/team/atlanta-braves.png'), $image);
    }



}
