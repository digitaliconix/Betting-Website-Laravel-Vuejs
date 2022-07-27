<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class ClientBetting extends Model
{
    use HasFactory;

    public function getTeamsAttribute()
    {
        return json_decode($this->attributes['teams']);
    }

    public function competition()
    {
        return $this->belongsTo(Competition::class, 'competition_id', 'id');
    }

    public function team()
    {
        return $this->belongsTo(Team::class, 'team_id', 'id');
    }

    public function client(){
        return $this->belongsTo(Client::class,'client_id','id');
    }

    public function getCreatedAtAttribute(){
        return Carbon::parse($this->attributes['created_at'])->format('M d Y');
    }
}
