<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// Route::model('song', 'App\Song');
Route::bind('song', function($slug) {
	//return App\Song::whereSlug($slug)->first();
	return App\Song::where('slug', $slug)->first();
});

Route::get('songs', 'SongsController@index');
Route::get('songs/{song}', 'SongsController@show');
Route::get('songs/{song}/edit', 'SongsController@edit');