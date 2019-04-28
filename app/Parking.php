<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Parking extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'block_name', 'space_name', 'rented'
    ];
}
