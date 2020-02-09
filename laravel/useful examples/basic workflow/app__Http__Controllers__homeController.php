<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class homeController extends Controller
{
	 
    public function index() {
		$lessons_blade = ['one', 'two', 'three'];
		$lessons_oldphp = ['chicken', 'duck', 'goose'];
		$name = '<em>john doe</em>';
		return view('pages.home', ['name'=> $name, 'lessons_blade'=> $lessons_blade,
										'lessons_oldphp'=> $lessons_oldphp]);
	}
}
