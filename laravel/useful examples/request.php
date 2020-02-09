<?php

// In controller:
public function index(Request $request) {
	\Request::all()
	\Request::get('title')
	
	$request->get()
	$request->get('title')
}
