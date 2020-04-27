<?php
header('Content-Type: text/javascript; charset=UTF-8'); // text/css

$lib = paths_under_dir('js/lib');
$app = paths_under_dir('js/app');
$all = array_merge($lib, $app);

foreach($all as $filename) {
	readfile($filename);
	echo "\n";
}

function paths_under_dir($dir) {
	$arr = [];
	foreach (new RecursiveIteratorIterator(new RecursiveDirectoryIterator($dir)) as $filename) {
		if (preg_match('/^.+[\\'. DIRECTORY_SEPARATOR .']\d{1,3}[_].+[.][j][s]$/', $filename)) {
			// echo $filename . "\n";
			$arr[] = (string)$filename;
		}
	}
	sort($arr, SORT_STRING);
	return $arr;
}
?>