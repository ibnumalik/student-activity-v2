<?php

use Illuminate\Database\Seeder;

class ParkingTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $blockName = ['A', 'B', 'C', 'D'];

        foreach ($blockName as $block) {
            for ($i = 1; $i <= 10; $i++) {
                DB::table('parkings')->insert([
                    'block_name' => $block,
                    'space_number' => $i,
                    'rented' => false
                ]);
            }
        }
    }
}
