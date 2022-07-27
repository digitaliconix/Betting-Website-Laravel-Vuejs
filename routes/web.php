<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ClientBettingController;
use App\Http\Controllers\InquiryController;
use \Illuminate\Support\Facades\Auth;
use App\Http\Controllers\PayPalPaymentController;

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

Auth::routes();
Route::get('/', [HomeController::class, 'index']);
Route::get('/about-us', [HomeController::class, 'about_us']);
Route::get('/privacy-policy', [HomeController::class, 'privacy_policy']);
Route::get('/terms-and-condition', [HomeController::class, 'terms_and_condition']);
Route::get('/contact-us', [HomeController::class, 'contact_us']);
Route::get('/packages', [HomeController::class, 'packages']);
Route::get('/prizes', [HomeController::class, 'prizes']);
Route::get('/thankyou/{id}', [HomeController::class, 'thankyou'])->name('thankyou');
Route::get('/product-checkout/{slug}', [HomeController::class, 'product_checkout'])->middleware('auth:client');
Route::post('/product-checkout', [HomeController::class, 'product_checkout_post'])->middleware('auth:client');
Route::get('/game-category/{slug}', [HomeController::class, 'game_category']);
Route::get('/blogs', [HomeController::class, 'blogs']);
Route::get('/blog/{slug}', [HomeController::class, 'blog_detail']);
Route::get('/checkout/{package}', [HomeController::class, 'checkout'])->middleware('auth:client');
Route::post('/contact-us', [InquiryController::class, 'store']);
Route::get('/attachment/{folder}/{file_name}', [HomeController::class, 'showAttachment']);

Route::post('/save_bet', [ClientBettingController::class, 'store']);
Route::post('/delete_bet/{id}', [ClientBettingController::class, 'delete'])->name('delete_bet');
Route::post('/update_bet/{id}', [ClientBettingController::class, 'update'])->name('update_bet');

Route::get('create-transaction', [PayPalPaymentController::class, 'createTransaction'])->name('createTransaction');
Route::post('process-transaction', [PayPalPaymentController::class, 'processTransaction'])->name('processTransaction');
Route::get('success-transaction', [PayPalPaymentController::class, 'successTransaction'])->name('successTransaction');
Route::get('cancel-transaction', [PayPalPaymentController::class, 'cancelTransaction'])->name('cancelTransaction');

Route::group([
    'middleware' => [
        'auth:client'
    ],
], function () {

    Route::get('/home', [HomeController::class, 'dashboard'])->name('home');
    Route::get('/profile-edit',[HomeController::class,'profile'])->name('profile');
    Route::post('/profile-update',[HomeController::class,'profile_update'])->name('profile_update');
    Route::get('/my-bets',[HomeController::class,'my_bets'])->name('my_bets');
    Route::get('/my-transactions',[HomeController::class,'my_transactions'])->name('my_transactions');
    Route::get('/my-orders',[HomeController::class,'my_orders'])->name('my_orders');

});
