<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class aboutController extends Controller
{
    public function index() {
		return view('pages.about');
	}
}
