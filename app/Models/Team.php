<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'slug', 'abbreviation', 'location', 'short_title', 'game_category_id', 'thumbnail', 'status', 'created_at', 'updated_at'
    ];

    protected $appends = ['photo'];

    public function game_category()
    {
        return $this->belongsTo(GameCategory::class, 'game_category_id', 'id');
    }

    public function getPhotoAttribute(){
        return url('/api/app/attachment/team/'.$this->attributes['thumbnail']);
    }
}
