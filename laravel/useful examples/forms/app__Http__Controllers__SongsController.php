<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Song;

class SongsController extends Controller
{
	private $song;

	public function __construct(Song $song) {
		$this->song = $song;
	}

    public function index() {
    	$songs = $this->song->get();
		return view( 'songs.list', compact('songs') );
	}
	
	public function show($slug, Song $song) {
		$song = $this->song->whereSlug($slug)->first();
		return view( 'songs.show', compact('song') );
	}

	public function edit($slug) {
		$song = $this->song->whereSlug($slug)->first();
		return view('songs.edit', compact('song'));
	}
	
	public function update($slug, Request $request) {
		
		//dd(\Request::all());
		//dd(\Request::get('title'));
		
		$song = $this->song->whereSlug($slug)->first();
		//$song->title = $request->get('title'); //$song->title = \Request::get('title'); without 2nd arg
		//$song->save();
		//$song->fill(['title'=> $request->get('title')])->save(); // MassAssignmentException taking information from a from and putting it straight into db (dangerous), unless: "protected $fillable = ['title', 'lyrics'];" in Song model
		$song->fill($request->input())->save();                    // MassAssignmentException taking information from a from and putting it straight into db (dangerous), unless: "protected $fillable = ['title', 'lyrics'];" in Song model
		return redirect('songs');
	}

	/*	Route Model Binding:
		replace $slug from arguments with Song $song
		remove $song fetching line;
	*/
}
