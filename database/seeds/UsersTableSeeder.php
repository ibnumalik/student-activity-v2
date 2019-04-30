<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => config('app.admin.name'),
            'email' => config('app.admin.email'),
            'password' => app('hash')->make(config('app.admin.password')),
            'role' => 'admin',
            'created_at' => date("Y-m-d H:i:s"),
        ]);
    }
}
