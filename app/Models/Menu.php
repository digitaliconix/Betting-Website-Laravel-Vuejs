<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;

    public function children(){
        $permissionsData = collect(auth()->user()->getAllPermissions());
        $permissions = $permissionsData->pluck('name');
        return $this->hasMany(Menu::class,'head_id', 'id')->with('children')
            ->where(function ($q) use ($permissions) {
                $q->whereIn('route', $permissions)
                    ->orWhere('route', '=', null);
            })->orderBy('sort');
    }
}
