<?php

try {
	do_some();
} catch (Exception $e) {
	echo 'Caught exception: ',  $e->getMessage(), "\n";
}