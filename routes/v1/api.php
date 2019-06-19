<?php

/*
|--------------------------------------------------------------------------
| Version 1
|--------------------------------------------------------------------------
|
*/

$api->get('/', function () {
    return [
        'message' => trans('message.welcome'),
        'branch' => 'dev-master'
    ];
});

$api->get('secret', function () {
    return str_random(32);
});

$api->get('date', function () {
    return date("Y-m-d H:i:s");
});

// Auth routes
$api->post('register', ['uses' => 'AuthController@register']);
$api->post('login', ['uses' => 'AuthController@login']);
$api->post('logout', ['uses' => 'AuthController@logout']);

$api->get('parking', ['uses' => 'ParkingController@getAll']);
$api->post('parking/rent', ['uses' => 'ParkingController@rent']);
$api->get('parking/{id}', ['uses' => 'ParkingController@get']);
