<?php
namespace my\name; // namespace must be the first statement of the script

class MyClass {}
function myfunction() {}
const MYCONST = 1;

$a = new MyClass;
$c = new \my\name\MyClass;

$a = strlen('hi');

$d = namespace\MYCONST; 

$d = __NAMESPACE__ . '\MYCONST';
echo constant($d);