<?php

namespace App\Http\Controllers;

use App\Parking;

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
}
