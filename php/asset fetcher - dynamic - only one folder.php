<?php
header('Content-Type: text/css; charset=UTF-8');
// header('Content-Type: text/javascript; charset=UTF-8');

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
	$rgx_upfolder = '/^\.{1,2}$/';
	$rgx_filename = '/^\d{1,3}[-].+[.][c][s][s]$/'; // [j][s]
	$rgx_main     = '/^[m][a][i][n][.][c][s][s]$/'; // [j][s]
	foreach (new DirectoryIterator($dir) as $filename) {
		$dir = str_replace('/', DIRECTORY_SEPARATOR, $dir);
		$dir = str_replace('\\', DIRECTORY_SEPARATOR, $dir);
		$fullpath = $dir. DIRECTORY_SEPARATOR .(string)$filename;
		
		if ( preg_match($rgx_filename, $filename) or preg_match($rgx_main, $filename) ) {
			array_push($arr, $fullpath);
		} else if ( !preg_match($rgx_upfolder, $filename) ) {
			echo "// filename ($fullpath) does not match the template. (0-name.css)\n"; // (0-name.js)
		}
	}
	sort($arr, SORT_NATURAL);
}
// '/^.+[\\'. DIRECTORY_SEPARATOR .']\d{1,3}[_].+[.][c][s][s]$/'			// /\W{1}\.{1,2}$/  ==  \. \..
?>