<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class ClientOrder extends Model
{
    protected $fillable = ['client_id', 'product_id', 'name', 'email', 'phone', 'address', 'city', 'state', 'country', 'zipcode', 'additional_info', 'order_number'];
    use HasFactory;

    public function product(){
        return $this->belongsTo(ShopProduct::class,'product_id','id');
    }

    public function client(){
        return $this->belongsTo(Client::class,'client_id','id');
    }
    public function getCreatedAtAttribute(){
        return Carbon::parse($this->attributes['created_at'])->format('M d Y');
    }
}
