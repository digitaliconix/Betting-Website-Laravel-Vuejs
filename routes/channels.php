<?php

use App\Models\HelpRequest;
use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('help_requests.{helpId}', function ($user, $helpId) {

    $model = HelpRequest::where('id',$helpId)->where(function($q) use($user){
            $q->where('care_giver_id', $user->id)
                ->orWhere(function($q) use($user){
                    $q->where('model_type', get_class($user))
                        ->where('model_id', $user->id);
                });
        })->first();

    if($model != null){
        return true;
    }else{
        return false;
    }
});
