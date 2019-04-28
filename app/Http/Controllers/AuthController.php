<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function login(Request $request)
    {
        $this->validateLogin($request);

        $user = User::where('email', $request->input('email'))->first();

        if (
            !$user ||
            !Hash::check($request->input('password'), $user->password)
        ) {
            return $this->authenticationMismatch();
        }

        $apiKey = encrypt($user->email.'|'.str_random(40));
        $user->update(['token' => $apiKey]);

        return response()->json([
            'status' => 'success',
            'message' => 'Successfully authenticated'
        ]);
    }

    private function validateLogin($request)
    {
        $rules = [
            'email' => 'required',
            'password' => 'required',
        ];
        $messages = [
            'email.required' => 'Email is required',
            'password.required' => 'Password is required'
        ];

        return $this->validate($request, $rules, $messages);
    }

    public function register(Request $request)
    {
        $this->validateRegistration($request);

        $emailExist = User::where('email', $request->input('email'))->first();

        /**
         * Check if email already exist in database
         */
        if ($emailExist) {
            return response()->json([
                'status' => 'fail',
                'message' => 'The email has already been used',
            ]);
        }

        /**
         * Check if password length is acceptable
         */
        if (strlen($request->input('password')) <= 6) {
            return response()->json([
                'status' => 'fail',
                'message' => 'The password length must be more than or 6 characters',
            ]);
        }

        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => app('hash')->make($request->input('password')),
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Successfully registered'
        ]);
    }

    private function validateRegistration($request)
    {
        $rules = [
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
        ];
        $messages = [
            'name.required' => 'Name is required',
            'email.required' => 'Email is required',
            'password.required' => 'Password is required'
        ];

        return $this->validate($request, $rules, $messages);
    }

    public function logout(Request $request)
    {
        $this->validate($request, [
            'token' => 'required'
        ], [ 'token.required' => 'Missing token' ]);

        $userToken = User::where('token', $request->input('token'))->first();

        if ( !$userToken ) {
            return response()->json([
                'status' => 'fail',
                'message' => 'Token does not exist',
            ]);
        }

        $userToken->update(['token' => 'LOGGED OUT']);

        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }

    /**
     * Return error message on wrong email or password
     *
     * @return response
     */
    private function authenticationMismatch()
    {
        return response()->json([
            'status' => 'fail',
            'message' => 'Incorrect email or password.'
        ]);
    }
}
