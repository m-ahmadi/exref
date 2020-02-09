<?php

class homeController extends Controller
{
    public function index() {
		$lessons = ['one', 'two', 'three'];
		$name = 'John Doe';
		
		return view( 'pages.home', ['name'=>$name, 'lessons'=>$lessons] );
		
		return view( 'pages.home', compact('lessons') );
		
		return view( 'pages.home')->with('lessons', $lessons);
		
		return view( 'pages.home')->with('lessons', $lessons)->with('foo', $bar);
		
		return view( 'pages.home')->withName('blah blah');
	}
}


// also possible from "App\Http\routes.php" file
Route::get('/', function () {
	$data = ['first-name' => 'mohammad', 'last-name' => 'ahmadi'];
    return view('welcome', ['data'=> $data]);
});