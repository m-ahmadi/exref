<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
		if ( !Schema::hasTable('comments') ) {
			
			Schema::create('comments', function (Blueprint $table) {
				$table->increments('id');
				$table->integer('user_id')->unsigned();
				$table->text('text');
				$table->timestamps();
				$table->foreign('user_id')->references('id')->on('users');
			});
		}
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('comments', function (Blueprint $table) {
            //
        });
    }
}
