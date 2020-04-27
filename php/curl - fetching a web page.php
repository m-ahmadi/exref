<?php

$ch = curl_init();	// create a new cURL resource

// set URL and other appropriate options
curl_setopt($ch, CURLOPT_URL, "http://www.example.com/");
curl_setopt($ch, CURLOPT_HEADER, 0);	

curl_exec($ch);		// grab URL and pass it to the browser
curl_close($ch);	// close cURL resource, and free up system resources

?>