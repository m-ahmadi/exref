<?php
header('Content-Type: text/javascript; charset=UTF-8'); // text/css

$path = isset( $_GET['path'] ) ? $_GET['path'] : null;
if     (  !isset    ( $path )  ) {  die('path argument is not set.');         } else
if     (  !is_array ( $path )  ) {  die('path argument is not an array.');    } else
if     (  empty     ( $path )  ) {  die('path argument is empty.');           }
$arr = [];

foreach ($path as $v) {
	if (  empty($v)            ) {  die('path item is empty.');               } else
	if (  !is_string($v)       ) {  die('path item is not string.');          }
	paths_under_dir($v, $arr);
}

foreach($arr as $filename) {
	readfile($filename);
	echo "\n";
}

function paths_under_dir($dir, &$arr) {
	foreach (new RecursiveIteratorIterator(new RecursiveDirectoryIterator($dir)) as $filename) {
	if (preg_match('/^.+[\\'. DIRECTORY_SEPARATOR .']\d{1,3}[-].+[.][j][s]$/', $filename)) { // [c][s][s]
			array_push($arr, (string)$filename);
		} else if ( !preg_match('/\W{1}\.{1,2}$/', $filename) ) {
			echo "// filename ($filename) does not match the template. (0-name.js)\n"; // 0-name.css
		}
	}
	sort($arr, SORT_STRING);
}
?>