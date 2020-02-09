<?php

require_once __DIR__ . '/vendor/autoload.php';


$fb = new Facebook\Facebook([
	'app_id'=>'573697499457342',
	'app_secret'=>'2ace78f3e226bb4cb0d00dc9bef9855d'
]);

$helper = $fb->getRedirectLoginHelper();
$permissions = ['email', 'user_likes'];
$loginUrl = $helper->getLoginUrl('http://{your-website}/login-callback.php', $permissions);


?>