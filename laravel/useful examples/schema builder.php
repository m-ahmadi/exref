<?php
/*
	../config/database.php
		'default' => env('DB_CONNECTION', 'mysql'),

		'mysql' => [
			'driver'    => 'mysql',
			'host'      => env('DB_HOST', 'localhost'),
			'database'  => env('DB_DATABASE', 'forge'),
			'username'  => env('DB_USERNAME', 'forge'),
			'password'  => env('DB_PASSWORD', ''),
			'charset'   => 'utf8',
			'collation' => 'utf8_unicode_ci',
			'prefix'    => '',
			'strict'    => false,
		]

	../.env
		DB_HOST=localhost
		DB_DATABASE=homestead
		DB_USERNAME=homestead
		DB_PASSWORD=secret

	php artisan make:migration create_a_table --create="songs"
	php artisan migrate   (up method fired)
	php artisan migrate:rollback (down method fired)
*/

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use App\Helper\PersianDate;
class CreateATable extends Migration
{
    public function up()
    {
		if (Schema::hasTable('table_name')) {
			//
		}
		
        Schema::create('table_name', function (Blueprint $table) {
			Schema::table();
			$table->engine = 'InnoDB';
            $table->increments('id');
			$table->string('title');
			$table->date('created_at');
			
			$table->bigIncrements('id');			//	Incrementing ID (primary key) using a "UNSIGNED BIG INTEGER" equivalent.
			$table->bigInteger('votes');			//	BIGINT equivalent for the database.
			$table->binary('data');					//	BLOB equivalent for the database.
			$table->boolean('confirmed');			//	BOOLEAN equivalent for the database.
			$table->char('name', 4);				//	CHAR equivalent with a length.
			$table->date('created_at');				//	DATE equivalent for the database.
			$table->dateTime('created_at');			//	DATETIME equivalent for the database.
			$table->decimal('amount', 5, 2);		//	DECIMAL equivalent with a precision and scale.
			$table->double('column', 15, 8);		//	DOUBLE equivalent with precision, 15 digits in total and 8 after the decimal point.
			$table->enum('choices', ['foo', 'bar']);//	ENUM equivalent for the database.
			$table->float('amount');				//	FLOAT equivalent for the database.
			$table->increments('id');				//	Incrementing ID (primary key) using a "UNSIGNED INTEGER" equivalent.
			$table->integer('votes');				//	INTEGER equivalent for the database.
			$table->json('options');				//	JSON equivalent for the database.
			$table->jsonb('options');				//	JSONB equivalent for the database.
			$table->longText('description');		//	LONGTEXT equivalent for the database.
			$table->mediumInteger('numbers');		//	MEDIUMINT equivalent for the database.
			$table->mediumText('description');		//	MEDIUMTEXT equivalent for the database.
			$table->morphs('taggable');				//	Adds INTEGER taggable_id and STRING taggable_type.
			$table->nullableTimestamps();			//	Same as timestamps(), except allows NULLs.
			$table->rememberToken();				//	Adds remember_token as VARCHAR(100) NULL.
			$table->smallInteger('votes');			//	SMALLINT equivalent for the database.
			$table->softDeletes();					//	Adds deleted_at column for soft deletes.
			$table->string('email');				//	VARCHAR equivalent column.
			$table->string('name', 100);			//	VARCHAR equivalent with a length.
			$table->text('description');			//	TEXT equivalent for the database.
			$table->time('sunrise');				//	TIME equivalent for the database.
			$table->tinyInteger('numbers');			//	TINYINT equivalent for the database.
			$table->timestamp('added_on');			//	TIMESTAMP equivalent for the database.
			$table->timestamps();					//	Adds created_at and updated_at, this method doesn't accept any arguments.
			
			//	Modifier:
			->first()								//	Place the column "first" in the table (MySQL Only)
			->after('column')						//	Place the column "after" another column (MySQL Only)
			->nullable()							//	Allow NULL values to be inserted into the column
			->default($value)						//	Specify a "default" value for the column
			->unsigned()							//	Set integer columns to UNSIGNED
			
			//	Available Index Types:
			$table->primary('id');					//	Add a primary key.
			$table->primary(['first', 'last']);		//	Add composite keys.
			$table->unique('email');				//	Add a unique index.
			$table->index('state');					//	Add a basic index.
			
			//	Foreign Key Constraints:
			$table->integer('user_id')->unsigned();
			$table->foreign('user_id')->references('id')->on('users');
		}
		
		
		
		
		
		Schema::create('another_table', function (Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
		});
		
		
		
		
		
		
    public function down()
    {
        Schema::drop('ads');
    }
}
