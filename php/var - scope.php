<?php
// one single global scope for all variables, except inside functions.

$a = 1; // available insde included file
include 'b.inc';

// functions have local scope
$a = 1;
function foo() {
	echo $a;
} 
foo(); // echos nothing
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// use global scope inside functions

// global keyword
$a = 37;
function foo() {
	global $a;
	echo $a;
}
foo(); // 37

// $GLOBALS array
$a = 65;
function foo() {
	echo $GLOBALS['a'];
}
foo(); // 65
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@