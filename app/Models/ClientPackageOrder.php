<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class ClientPackageOrder extends Model
{
    use HasFactory;

    protected $fillable = [
        'client_id', 'package_id', 'name', 'email', 'phone', 'team', 'address', 'city', 'state', 'country', 'zipcode', 'additional_info', 'payment_method', 'paypal_response'
    ];

    public function package()
    {
        return $this->belongsTo(Package::class, 'package_id', 'id');
    }

    public function setPaypalResponseAttribute($value)
    {
        $this->attributes['paypal_response'] = json_encode($value);
    }
    public function getPaypalResponseAttribute()
    {
        return json_decode($this->attributes['paypal_response']);
    }
    public function getCreatedAtAttribute(){
        return Carbon::parse($this->attributes['created_at'])->format('M d Y');
    }

}
