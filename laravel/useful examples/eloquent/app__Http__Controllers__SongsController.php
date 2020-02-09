<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Song;

class SongsController extends Controller
{
    public function index(/* Song $song */) {
    	$songs = Song::get(); /* $song->get(); */
		return view( 'songs.list', compact('songs') );
	}
	
	public function show(Song $song) /* $slug */ {
		// $song = Song::whereSlug($slug)->first();
		return view( 'songs.show', compact('song') );
	}

	public function edit(Song $song) {
		return 'Edit the song with the title of ' . $song->title();
	}
	
}
