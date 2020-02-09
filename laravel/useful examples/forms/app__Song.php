<?php namespace App;
use Illuminate\Database\Eloquent\Model as Eloquent;

class Song extends Eloquent {
	protected $fillable = ['title', 'lyrics'];
	
}