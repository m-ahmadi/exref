<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ad extends Model
{	// Table Names
	// table name : plural name of the class, unless another name is specified
	protected $table = 'my_flights';
    
	
	// Primary Keys
	// Eloquent will also assume that each table has a primary key column named id.
	// define a $primaryKey property to override this convention.
	$primaryKey
	
	// Timestamps
	// By default, Eloquent expects created_at and updated_at columns to exist on your tables.
	// If you do not wish to have these columns automatically managed by Eloquent, set the $timestamps property on your model to false
	public $timestamps = false;
	
}

// In Controller:
public function index(Ad $ad) {
	
	// Find
	$t = App\Ad::find(1);
	$t = Ad::where('id', 2)->first();
	$t = Ad::whereId(2)->first();
	$t = Ad::where('title', 'Microsoft')->first();
	$t = Ad::whereTitle('Microsoft')->first();
	Ad::save()
	
	Ad $ads;
	$t = $ads->where('price', 35);
	$t = $ads->wherePrice(35);
	$t->save();
	
	// Delete
	$ad = App\Ad::find(1);
	$ad->delete();
	
}