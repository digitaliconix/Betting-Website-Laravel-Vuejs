<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Competition extends Model
{
    use HasFactory;

    protected $fillable = [
        'api_id', 'title',  'game_category_id', 'team1_id', 'team2_id', 'team1_score', 'team2_score', 'start_time', 'created_at', 'updated_at'
    ];

    public function game_category()
    {
        return $this->belongsTo(GameCategory::class, 'game_category_id', 'id');
    }

    public function team_1()
    {
        return $this->belongsTo(Team::class, 'team1_id', 'id');
    }
    public function team_2()
    {
        return $this->belongsTo(Team::class, 'team2_id', 'id');
    }
    public function client_bet_slip(){
        return $this->hasOne(ClientBetting::class,'competition_id','id')->where('client_id',request()->user()->id);
    }
    public function getCreatedAtAttribute(){
        return Carbon::parse($this->attributes['created_at'])->format('d-m-Y');
    }
}
