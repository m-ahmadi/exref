<?php
include('somefile.php'); // or
include 'somefile.php';


// vars.php
$color = 'green';
$fruit = 'apple';

// test.php
echo "A $color $fruit"; // A
include 'vars.php';
echo "A $color $fruit"; // A green apple


/* path is relative to first file in the include chain
	main.php
	a/side.php
	a/other.php
*/

// main.php
include('a/side.php');

// side.php
include('other.php');   // error
include('a/other.php'); // ok