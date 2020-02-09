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


// Route::bind('song', function() {
// 	return \App\Song::whereSlug($slug)->first();
// });

Route::get('songs', 'SongsController@index');
Route::get('songs/{slug}', 'SongsController@show');
Route::get('songs/{slug}/edit', 'SongsController@edit');
Route::patch('songs/{slug}', 'SongsController@update');