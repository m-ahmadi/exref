<?php
define('DS', DIRECTORY_SEPARATOR);
define('SITE_ROOT', 'E:' .DS. 'xampp'.DS.'htdocs'.DS);

const ROOT = '/path/to';
const COMMON = '/path/to/somewhere';

// retrieve value
constant('ROOT')

// trick:
define('ANIMAL', 'turtles'); 
$constant = 'constant';
echo "I like {$constant('ANIMAL')}";