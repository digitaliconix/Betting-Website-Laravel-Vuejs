<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Client;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Rules\MatchOldPassword;


class AppAuthController extends Controller
{
    protected function guard()
    {
        return Auth::guard('client');
    }

    public function appLogin(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "email" => "required",
            "password" => "required"
        ]);

        if ($validator->fails()) {
            return response()->json([
                "status_code" => 300, "errors" => $validator->errors()
            ]);
        }
        $login = $request->email;
        $fieldType = filter_var($login, FILTER_VALIDATE_EMAIL) ? 'email' : 'name';

        if (!$this->guard()->attempt([$fieldType => $request->email, 'password' => $request->password])) {
            return response()->json([
                "status_code" => 500,
                "message" => "Unauthorized"
            ]);
        }
        $user = $this->guard()->user();

        $model = Client::findOrFail($user->id);

        $tokenResult = $model->createToken("win")->plainTextToken;
        return response()->json([
            "user" => $model,
            "status_code" => 200,
            "access_token" => $tokenResult,
        ]);
    }

    public function appProfile(Request $request)
    {
        $model = Client::findOrFail($request->user()->id);
        $model->fill($request->all());
        if ($request->hasFile('photo')) {
            $model->profile = $path = $request->file('photo')->store('images/profile');
        }
        $model->save();

        return response()->json([
            "user" => $model,
            "status_code" => 200,
        ]);

    }

    public function appRegister(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name' => ['required', 'max:255'],
//            'mobile_no' => ['required', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:client_users'],
            'password' => [
                'required',
                'string',
                'confirmed',
                'min:8',              // must be at least 10 characters in length
                'regex:/[a-z]/',      // must contain at least one lowercase letter
                'regex:/[A-Z]/',      // must contain at least one uppercase letter
                'regex:/[0-9]/',      // must contain at least one digit
                //'regex:/[@$!%*#?&]/'  // must contain a special character
            ],
            'password_confirmation' => 'required'
        ], [
            'password.regex' => 'Must contain at least 1 uppercase,lowercase and numeric'
        ]);

        if ($validator->fails()) {
            return response()->json([
                "status_code" => 300, "errors" => $validator->errors()
            ]);
        }

        $user = $this->create($request->all());

        return response()->json([
            "status_code" => 200, "message" => "We have send a verification mail to your email. Please verify to continue"
        ]);

    }

    public function appChangePassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'current_password' => ['required', new MatchOldPassword],
            'password' => [
                'required',
                'string',
                'confirmed',
                'min:8',              // must be at least 10 characters in length
                'regex:/[a-z]/',      // must contain at least one lowercase letter
                'regex:/[A-Z]/',      // must contain at least one uppercase letter
                'regex:/[0-9]/',      // must contain at least one digit
                //'regex:/[@$!%*#?&]/'  // must contain a special character
            ],
            'password_confirmation' => 'required',
        ], [
            'password.regex' => 'Must contain at least 1 uppercase,lowercase and numeric'
        ]);

        if ($validator->fails()) {
            return response()->json([
                "status_code" => 300, "errors" => $validator->errors()
            ]);
        }

        $model = Client::findOrFail($request->user()->id);
        $model->password = $request->password;
        $model->save();
        return response()->json([
            "status_code" => 200, "message" => "Password Change Successfully"
        ]);
    }

    public function appUpdateProfile(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:client_users,email,' . $request->user()->id,
            'name' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                "status_code" => 300, "errors" => $validator->errors()
            ]);
        }

        $model = Client::findOrFail($request->user()->id);
        $model->fill($request->all());
        if ($request->hasFile('photo_image')) {
            $photo = $request->file('photo_image');
            $photo_filename = time().$photo->getClientOriginalName();
            upload('local',$photo,'/profile/',$photo_filename);
            $model->photo = $photo_filename;
        }


        $model->save();

        return response()->json(["status_code" => 200, "message" => "Profile Update Successfully", "user" => $model]);

    }

    protected function create()
    {
        return Client::create(request()->all());
    }

    public function appLogout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json([
            'status_code' => 200,
            "logout" => true
        ]);
    }
}
