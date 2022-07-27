<?php

namespace App\Http\Controllers\CareGiver\Auth;

use App\Http\Controllers\Controller;
use App\Models\CareGiver;
use App\Models\CareGiverType;
use App\Models\Counter;
use App\Models\Country;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
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
        $this->middleware('guest:care_giver');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {

        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:care_giver_users'],
            'phone_no' => ['required', 'string', 'max:20'],
            'care_giver_type_id' => ['required', 'numeric', 'exists:care_giver_types,id'],
            'country_id' => ['required', 'numeric', 'exists:countries,id'],
            'state_id' => ['required', 'numeric', 'exists:states,id'],
            'city_id' => ['required', 'numeric', 'exists:cities,id'],
            'zip_code' => ['required', 'numeric'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'accept_agreement' => ['required','in:on'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Models\User
     */
    protected function create(array $data)
    {
//        $counter = Counter::where('key', 'care_giver')->first();
//        $number = Str::padLeft($counter->value,5,'0');
//        $user_code = $counter->prefix.$number;
        $user = CareGiver::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'phone_no' => $data['phone_no'],
            'care_giver_type_id' => $data['care_giver_type_id'],
            'country_id' => $data['country_id'],
            'state_id' => $data['state_id'],
            'city_id' => $data['city_id'],
            'zip_code' => $data['zip_code'],
            'password' => $data['password'],
            'accept_agreement' => 1,
        ]);
        $user->syncRoles(['Default']);
//        $counter->increment('value');

        return $user;
    }
    public function showRegistrationForm()
    {
        $country = Country::get();
        $care_giver_types = CareGiverType::get();

        return view('backend.care_giver.auth.register', ['country' => $country, 'care_giver_types' => $care_giver_types]);
    }

    protected function guard(){

        return Auth::guard('care_giver');
    }

}
