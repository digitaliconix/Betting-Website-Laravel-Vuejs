<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShopProduct extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'slug', 'unit_price', 'shop_category_id', 'thumbnail', 'status', 'created_at', 'updated_at'
    ];

    protected $appends = ['photo'];

    public function shop_category()
    {
        return $this->belongsTo(ShopCategory::class,'shop_category_id', 'id');
    }

    public function getPhotoAttribute(){
        return url('/api/app/attachment/shop_product/'.$this->attributes['thumbnail']);
    }

}
