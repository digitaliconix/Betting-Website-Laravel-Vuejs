<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;
use Laravel\Sanctum\HasApiTokens;

class Client extends Authenticatable implements MustVerifyEmail
{
    use HasFactory, Notifiable, HasRoles,HasApiTokens;

    protected $table = "client_users";
    protected $guard = 'client';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_code',
        'name',
        'email',
        'password',
        'phone_no',
        'client_type_id',
        'country_id',
        'state_id',
        'city_id',
        'zip_code',
        'photo'
    ];

    protected $appends = ['profile_pic'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getGuarded()
    {
        return $this->guard;
    }

    public function setPasswordAttribute($password)
    {
        $this->attributes['password'] = bcrypt($password);
    }

    public function country()
    {
        return $this->belongsTo(Country::class, 'country_id', 'id');
    }

    public function state()
    {
        return $this->belongsTo(State::class, 'state_id', 'id');
    }

    public function city()
    {
        return $this->belongsTo(City::class, 'city_id', 'id');
    }

    public function package_orders()
    {
        return $this->hasMany(ClientPackageOrder::class,'client_id', 'id')->orderBy('id', 'desc');
    }

    public function bettings()
    {
        return $this->hasMany(ClientBetting::class,'client_id', 'id')->orderBy('id', 'desc');
    }

    public function orders()
    {
        return $this->hasMany(ClientOrder::class,'client_id', 'id')->orderBy('id', 'desc');
    }

    public function getProfilePicAttribute(){

        return url('/api/app/attachment/profile/'.($this->attributes['photo'] != null ? $this->attributes['photo'] :'no-image.png') );
    }

}
