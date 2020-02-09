<?php
require_once 'google-api-php-client/src/Google/autoload.php';  


$client = new Google_Client();
$client->addScope('profile', 'email');
$client->setRedirectUri('http://localhost:1250');
$auth_url = $client->createAuthUrl();

header('Location: ' . filter_var($auth_url, FILTER_SANITIZE_URL));
?>