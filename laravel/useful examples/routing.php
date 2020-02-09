<?php

Route::get('/', 'HomeController@index');

$router->get('/', 'HomeController@index');

get('/', 'HomeController@index');

Route::get('/', function () {
	// pass data to view in thr 2nd argument of "view" function.
	$data = 'Mohammad Ahmadi';
    return view('welcome', ['data' => $data]);
});



// 'uses' = doesn't do anything, just another way:
Route::get('/', ['uses' => 'HomeController@index']);
Route::get('/', array('uses' => 'HomeController@index'));

// 'as' = reference the url later: $url = route('index');
Route::get('/', ['as' => 'index', 'uses' => 'HomeController@index']);
Route::get('/', 'HomeController@index')->name('index');
Route::get('/', ['as' => 'index', function () {}]);



// Route Parameters:
Route::get('/{id}', function ($id) {
	// '/{first}/{second}/{third}' = func($f, $s, $t)
    return $id;
});
Route::get('/{id}', function () {
    return $id; // undefined variable $id;
});
Route::get('/{id}', function () {
    return func_get_args()[0];
});



// ? = make the presence of the route parameter optional
Route::get('/{name?}', function ($name = null) {
	// '/salam'  =  'salam'
	// '/'       =  ''
    return $name;
});
Route::get('/{name?}', function ($name = 'John') {
	// '/salam'  =  'salam'
	// '/'       =  'john'
    return $name;
});
Route::get('/{name}', function ($name = null) {
	// request to '/'  =  NotFoundHttpException
    return $name;
});
