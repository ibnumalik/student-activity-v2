<?php

namespace App\Http\Controllers;

use App\Parking;
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
}
