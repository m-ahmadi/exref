<?php

use Illuminate\Database\Seeder;

class CommentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('comments')->insert([
            'user_id' => 1,
            'text' => 'salam man mohammad hastam'
        ]);
		DB::table('comments')->insert([
            'user_id' => 1,
            'text' => 'man mamad ahmadiam'
        ]);
		DB::table('comments')->insert([
            'user_id' => 1,
            'text' => 'are baw man mamad ahmadiam'
        ]);
		DB::table('comments')->insert([
            'user_id' => 2,
            'text' => 'mani ali viperam chetor mano yadet nist'
        ]);
		DB::table('comments')->insert([
            'user_id' => 2,
            'text' => 'are baw man ali joonbazam refighe abolfazl'
        ]);
		DB::table('comments')->insert([
            'user_id' => 3,
            'text' => 'mamadi man farhadam in idi jadidame'
        ]);
		DB::table('comments')->insert([
            'user_id' => 3,
            'text' => 'karim dadashe mane, man farhadam'
        ]);
		DB::table('comments')->insert([
            'user_id' => 3,
            'text' => 'familam khaybashie, farhadam, dadashe ali'
        ]);
		DB::table('comments')->insert([
            'user_id' => 4,
            'text' => 'man saman, dadashe salmanam'
        ]);
		DB::table('comments')->insert([
            'user_id' => 4,
            'text' => 'are man kargardane theatram, esmam samane'
        ]);
		
    }
}
