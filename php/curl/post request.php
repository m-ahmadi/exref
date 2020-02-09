<?php

$ch = curl_init('http://example.com/script.php');
curl_setopt($ch, CURLOPT_POSTFIELDS, array('post' => 'parameter', 'values' => 'go here'));
curl_exec($ch);
curl_close($ch);
