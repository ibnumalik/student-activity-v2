<?php

namespace App\Http\Controllers\V1;

use App\User;
use App\Parking;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ParkingController extends Controller
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

    public function getAll()
    {
        return response()->json([
            'status' => 'success',
            'data' => [
                'parking' => Parking::all()
            ]
        ]);
    }

    public function get($id)
    {
        try {
            $parking = Parking::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'status' => 'fail',
                'message' => 'Parking space not found'
            ]);
        }

        return response()->json([
            'status' => 'success',
            'data' => [
                'parking' => $parking
            ]
        ]);
    }

    public function rent(Request $request)
    {
        $this->validateRent($request);

        try {
            $parking = Parking::findOrFail($request->input('parking_id'));
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'status' => 'fail',
                'message' => 'Parking space not found'
            ]);
        }

        if ($parking->user_id) {
            return response()->json([
                'status' => 'fail',
                'message' => 'The parking space has been rented'
            ]);
        }

        try {
            $user = User::where('token', $request->input('token'))->firstOrFail();
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'status' => 'fail',
                'message' => 'User does not exist'
            ]);
        }

        $user->parkings()->save($parking);

        return response()->json([
            'status' => 'success',
            'data' => [
                'receipt' => $this->generateReceipt()
            ]
        ]);
    }

    private function validateRent($request)
    {
        $rules = [
            'token' => 'required',
            'parking_id' => 'required',
        ];
        $messages = [
            'token.required' => 'Missing user token',
            'parking_id.required' => 'Missing parking id',
        ];

        return $this->validate($request, $rules, $messages);
    }

    public function generateReceipt()
    {
        return str_random(32);
    }
}
