<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Client\ApplicationController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\StateController;
use App\Http\Controllers\CityController;
use App\Http\Controllers\HelpTypeController;
use App\Http\Controllers\HelpTypeServiceController;
use App\Http\Controllers\HelpRequestController;
use App\Http\Controllers\ClientTypeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['namespace' => 'Client'],function(){
    Auth::routes(['verify' => true]);
});

Route::group([
    'namespace' => 'Client\Auth',
], function () {
    Route::get('login', 'LoginController@showLoginForm')->name('login_page');
    Route::get('register', 'RegisterController@showRegistrationForm')->name('register_page');
    Route::post('login', 'LoginController@login')->name('login');
    Route::post('register', 'RegisterController@register')->name('register');
    Route::get('logout', 'LoginController@logout')->name('logout');
});

Route::group(['prefix' => 'search'], function(){
    Route::get('states', [StateController::class, 'search']);
    Route::get('cities', [CityController::class, 'search']);
});

Route::group([
    'middleware' => [
        'auth:client',
        'verified:client.verification.notice',
    ],
], function () {
    Route::group(['prefix' => 'api'], function () {

        Route::get('/attachment/{folder}/{file_name}',[\App\Http\Controllers\Client\ClientController::class,'showAttachment']);
        Route::get('get_detail',[\App\Http\Controllers\Client\ClientController::class,'edit_detail']);
        Route::post('update_detail',[\App\Http\Controllers\Client\ClientController::class,'update_detail']);

        Route::get('menus', [MenuController::class, 'index']);
        Route::get('dashboard', [\App\Http\Controllers\Client\ClientController::class, 'dashboard']);
        Route::get('help_requests', [HelpRequestController::class, 'client_index']);
        Route::post('help_requests', [HelpRequestController::class, 'store']);
        Route::get('help_request_chat/{id}', [\App\Http\Controllers\HelpRequestController::class, 'help_request_chat']);
        Route::post('help_request_chats', [\App\Http\Controllers\HelpRequestChatController::class,'store']);

        Route::group(['prefix' => 'search'], function () {
            Route::get('countries', [CountryController::class, 'typeahead']);
            Route::get('states', [StateController::class, 'typeahead']);
            Route::get('cities', [CityController::class, 'typeahead']);
            Route::get('client_types', [ClientTypeController::class, 'typeahead']);
            Route::get('help_types', [HelpTypeController::class, 'search']);
            Route::get('help_type_services', [HelpTypeServiceController::class, 'search']);
        });

    });
    Route::namespace('Client')->group(function () {
        Route::get('{vue?}', [ApplicationController::class, 'index'])->where('vue', '[\/\w\.-]*')->name('dashboard');
    });
});
