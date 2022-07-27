<?php

namespace App\Console\Commands;

use App\Models\Competition;
use App\Models\Configuration;
use App\Models\GameCategory;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class GetScore extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'score:get';

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
//        Log::debug(now());
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
                    }
                }
            }
        }
    }
}
