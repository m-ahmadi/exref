<?php

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "http://www.example.com/");
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_HTTPHEADER,array('HeaderName: HeaderValue'));
curl_setopt($ch, CURLOPT_HTTPHEADER,array('HeaderName: HeaderValue','HeaderName2: HeaderValue2'));
curl_exec($ch);
curl_close($ch);