<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class SongsController extends Controller
{
    public function index() {
		$songs = $this->getSongs();
		
		return view( 'songs.list', compact('songs') );
	}
	
	public function show($id) {
		$song = $this->getSongs()[$id];
		return view( 'songs.show', compact('song') );
	}
	
	private function getSongs() {
		$songs = ['Boyfriend', 'Be Alright', 'Fall'];
		return $songs;
	}
}
