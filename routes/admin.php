<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\ApplicationController;
//use App\Http\Controllers\GameCategoryController;
//use App\Http\Controllers\TeamController;
use App\Http\Controllers\DurationController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\StateController;
use App\Http\Controllers\CityController;
use App\Http\Controllers\HelpTypeController;
use App\Http\Controllers\HelpTypeServiceController;
use App\Http\Controllers\HelpRequestStatusController;
use App\Http\Controllers\ClientTypeController;
use App\Http\Controllers\CareGiverTypeController;

/*
|---------------------------------------R-----------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::group([
    'namespace' => 'Admin\Auth',
], function () {
    Route::get('login', 'LoginController@showLoginForm')->name('login_page');
//    Route::get('register', 'RegisterController@showRegistrationForm')->name('register_page');
    Route::post('login', 'LoginController@login')->name('login');
//    Route::post('register', 'RegisterController@register')->name('register');
    Route::get('logout', 'LoginController@logout')->name('logout');
});

Route::group([
    'middleware' => [
        'auth:admin'
    ],
], function () {
    Route::group(['prefix' => 'api'], function () {

        Route::get('/get_matches',[\App\Http\Controllers\GetMatchController::class, 'get_match']);
        Route::get('/get_scores',[\App\Http\Controllers\GetMatchController::class, 'get_score']);

        ///// profile update edit attachment routes /////////
        Route::get('/attachment/{folder}/{file_name}', [\App\Http\Controllers\HomeController::class, 'showAttachment']);
        Route::get('/attachment2/{folder}/{file_name}', [\App\Http\Controllers\HomeController::class, 'showAttachment2']);

        Route::get('get_detail', [\App\Http\Controllers\Admin\AdminController::class, 'edit_detail']);
        Route::post('update_detail', [\App\Http\Controllers\Admin\AdminController::class, 'update_detail']);

        Route::get('dashboard', [\App\Http\Controllers\Admin\AdminController::class, 'dashboard']);
        Route::get('/inquiries', [\App\Http\Controllers\InquiryController::class, 'index']);
        Route::get('/get_roles', [\App\Http\Controllers\PermissionController::class, 'get_roles']);
        Route::get('/clients', [\App\Http\Controllers\Client\ClientController::class, 'admin_index']);
        Route::get('/clients/{id}', [\App\Http\Controllers\Client\ClientController::class, 'admin_show']);
        Route::post('/clients', [\App\Http\Controllers\Client\ClientController::class, 'admin_store']);
        Route::post('/assign_user_role', [\App\Http\Controllers\PermissionController::class, 'update_admin_roles']);

        Route::resource('menus', MenuController::class);
        Route::resource('users', Admin\AdminController::class);
        Route::resource('role_permission', PermissionController::class);
        Route::resource('game_categories', GameCategoryController::class);
        Route::resource('teams', TeamController::class);
        Route::resource('competitions', CompetitionController::class);
        Route::resource('packages', PackageController::class);
        Route::resource('role_permission', PermissionController::class);
        Route::resource('blogs', BlogController::class);
        Route::resource('configurations', ConfigurationController::class);
        Route::resource('shop-categories', ShopCategoryController::class);
        Route::resource('shop-products', ShopProductController::class);
        Route::resource('client_bettings', ClientBettingController::class);
        Route::resource('client_orders', ClientOrderController::class);

        Route::group(['prefix' => 'search'], function () {
            Route::get('game_categories', [\App\Http\Controllers\GameCategoryController::class, 'typeahead']);
            Route::get('shop_categories', [\App\Http\Controllers\ShopCategoryController::class, 'typeahead']);
            Route::get('teams', [\App\Http\Controllers\TeamController::class, 'typeahead']);
            Route::get('durations', [DurationController::class, 'typeahead']);
            Route::get('countries', [CountryController::class, 'typeahead']);
            Route::get('states', [StateController::class, 'typeahead']);
            Route::get('cities', [CityController::class, 'typeahead']);
        });

    });
    Route::namespace('Admin')->group(function () {
        Route::get('{vue?}', [ApplicationController::class, 'index'])->where('vue', '[\/\w\.-]*')->name('dashboard');
    });
});

