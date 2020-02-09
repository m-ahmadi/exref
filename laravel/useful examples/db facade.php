<?php

// In controller:

use DB; 

DB::table('ads')->get();


DB::table('ads')->find($id);


DB::table('ads')
	->where(['id' => $id])
	->update([
		'title' => $request->get('title'),
		'creator' => $request->get('creator'),
		'short_desc' => $request->get('short_desc')
	]);


DB::table('ads')->insert([
	'title' => $request->get('title'),
	'short_desc' => $request->get('short_desc'),
	'creator' => $request->get('creator'),
	'created_at' => new DateTime
]);


DB::table('ads')->where(['id' => $id])->delete();
