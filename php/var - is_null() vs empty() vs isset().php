<?php

$v = null;  is_null($v); // true
$v = 0;     is_null($v); // false
$v = false; is_null($v); // false
$v = '';    is_null($v); // false
is_null($x);             // true (throws notice)

$v = null;  isset($v); // false
$v = 0;     isset($v); // true
$v = false; isset($v); // true
$v = '';    isset($v); // true
isset($x);             // false

$v = null;  empty($v); // true
$v = 0;     empty($v); // true
$v = false; empty($v); // true
$v = '';    empty($v); // true
$v = '0';   empty($v); // true
empty($x);             // true