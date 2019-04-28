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

        $apiKey = base64_encode(str_random(40));
        $user->update(['token' => $apiKey]);

        return response()->json([
            'status' => 'success',
            'message' => 'Successfully authenticated'
        ], 200);
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
        ], 401);
    }
}
