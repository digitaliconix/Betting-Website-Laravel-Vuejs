<?php

namespace App\Console\Commands;

use App\Models\Competition;
use App\Models\Configuration;
use App\Models\GameCategory;
use App\Models\Team;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class GetMatch extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'match:get';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
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
    }
}
