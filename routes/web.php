<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'api'], function () use ($router) {
    $router->get('secret', function () {
        return str_random(32);
    });
    $router->get('date', function () {
        return date("Y-m-d H:i:s");
    });

    // Auth routes
    $router->post('register', [ 'uses' => 'AuthController@register' ]);
    $router->post('login', [ 'uses' => 'AuthController@login' ]);
    $router->post('logout', [ 'uses' => 'AuthController@logout' ]);

    $router->get('parking', [ 'uses' => 'ParkingController@getAll' ]);
    $router->post('parking/rent', [ 'uses' => 'ParkingController@rent' ]);
    $router->get('parking/{id}', [ 'uses' => 'ParkingController@get' ]);
});
