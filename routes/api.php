<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ShopProductController;
use App\Http\Controllers\PackageController;
use App\Http\Controllers\Client\AppAuthController;
use App\Http\Controllers\ClientBettingController;
use App\Http\Controllers\ClientOrderController;
use App\Http\Controllers\ClientPackageOrderController;
use App\Http\Controllers\CompetitionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/app/login', [AppAuthController::class, 'appLogin']);
Route::post('/app/register', [AppAuthController::class, 'appRegister']);
Route::get('/app/attachment/{folder}/{file_name}', [HomeController::class, 'showAttachment']);


Route::group(['middleware' => ['auth:sanctum'], 'prefix' => 'app'], function () {
    Route::get("/logout", [AppAuthController::class, 'appLogout']);
    Route::get('/packages', [PackageController::class, 'app_index']);
    Route::get('/prizes', [ShopProductController::class, 'app_index']);
    Route::get('/competitions/{id}', [CompetitionController::class, 'app_index']);
    Route::get('/my_bets', [ClientBettingController::class, 'app_index']);
    Route::get('/my_orders', [ClientOrderController::class, 'app_index']);
    Route::get('/get_user',function (Request $request){
        return response()->json(['user'=>$request->user()]);
    });
    Route::get('/my_transactions', [ClientPackageOrderController::class, 'app_index']);
    Route::post('/save_bet', [ClientBettingController::class, 'app_store']);
    Route::post('/update_bet/{id}', [ClientBettingController::class, 'app_update']);
    Route::post('/delete_bet/{id}', [ClientBettingController::class, 'app_delete']);
    Route::post('/product_order', [ClientOrderController::class, 'app_store']);
    Route::post('/package_order', [ClientPackageOrderController::class, 'app_store']);
    Route::post('/update_password', [AppAuthController::class, 'appChangePassword']);
    Route::post('/update_profile', [AppAuthController::class, 'appUpdateProfile']);

});
