<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Support\Facades\Route;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    protected function redirectTo($request)
    {
        if (! $request->expectsJson()) {

            if(Route::is('admin.*')){
                return route('admin.login_page');
            }

            if(Route::is('client.*')){
                return route('client.login_page');
            }

            if(Route::is('care_giver.*')){
                return route('care_giver.login_page');
            }

            return route('login');
        }
    }
}
