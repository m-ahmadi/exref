<?php

func_num_args()
func_get_args()

function func() {
	
	if ( func_num_args() === 0 ) { return; }
	
	foreach (func_get_args() as $arg) {
		// do something
	}
	
	return $html;
}