<?php

$ch = curl_init('http://example.com/script.php?query=parameter');
curl_exec($ch);
curl_close($ch);