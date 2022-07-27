<?php

namespace App\Http\Controllers\CareGiver\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/care_giver';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest:care_giver')->except('logout');
    }

    public function showLoginForm()
    {
        return view('backend.care_giver.auth.login');
    }

    protected function guard(){

        return Auth::guard('care_giver');
    }

    public function logout()
    {
        Auth::guard('care_giver')->logout();
        return redirect()
            ->route('care_giver.login');
    }
}
