<?php
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@	Database Seeding	@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//				php artisan make:seeder UsersTableSeeder
//				Laravel-App/database/seed/UsersTableSeeder.php  :
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
class DatabaseSeeder extends Seeder {
    public function run() {
        DB::table('users')->insert([
            'name' => str_random(10),
            'email' => str_random(10).'@gmail.com',
            'password' => bcrypt('secret'),
        ]);
    }
}
//				Laravel-App/database/seed/DatabaseSeeder.php :
public function run() {
    Model::unguard();
    $this->call(UsersTableSeeder::class);
    $this->call(PostsTableSeeder::class);
    $this->call(CommentsTableSeeder::class);
    Model::reguard();
}
//				php artisan db:seed
//				php artisan db:seed --class=UserTableSeeder		(only seeds the `users` table)
//				php artisan migrate:refresh --seed


// note: a UserTableSeeder Comes automatically with a fresh new laravel installation
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@	In migrations:	@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// In migrations:
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
class CreateAdsTable extends Migration {
    public function up() {
        Schema::create('ads', function (Blueprint $table) {
            $table->increments('id');
			$table->string('title');
        });
		DB::table('ads')->insert([
			'title' => 'agahi 1'
		]);
	}
    public function down() {
        Schema::drop('ads');
    }
}