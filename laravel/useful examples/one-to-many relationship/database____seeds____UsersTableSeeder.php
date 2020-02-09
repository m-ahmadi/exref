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
            'name' => 'mohammad ahmadi',
            'email' => 'mohammad.ahmadi1989@yahoo.com',
        ]);
		DB::table('users')->insert([
            'name' => 'ali jahanbazian',
            'email' => 'ali@gmail.com',
        ]);
		DB::table('users')->insert([
            'name' => 'farhad khayambashi',
            'email' => 'farhadkhayam@yahoo.com',
        ]);
		DB::table('users')->insert([
            'name' => 'saman khoshghamat',
            'email' => 'scorpion@yahoo.com',
        ]);
    }
}
