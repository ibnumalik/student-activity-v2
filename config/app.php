<?php

return [
    'admin' => [
        'name' => env('ADMIN_NAME'),
        'email' => env('ADMIN_EMAIL'),
        'password' => env('ADMIN_PASSWORD'),
    ],
    'key' => env('APP_KEY'),
    'cipher' => 'AES-256-CBC'
];
