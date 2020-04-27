<?php

$ch = curl_init();  
curl_setopt($ch, CURLOPT_URL, 'http://www.yahoo.com/');  
curl_setopt($ch, CURLOPT_HEADER, 0);  
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);  
$output = curl_exec($ch);  
//echo $output;
curl_close($ch);