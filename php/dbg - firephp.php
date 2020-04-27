<?php

require_once('FirePHPCore/FirePHP.class.php');
$firephp = FirePHP::getInstance(true);

$firephp->group(array('this' => 'is', 'group' => 'output'));

$firephp->log('Log', 'Label');
$firephp->info('Info test');
$firephp->error('Error', 'Err Label');
$firephp->warn('Warning');
$firephp->log(array(0 => 'A', 'Z' => 'Y'));
$firephp->log(array(1, 2, array(0 => 'A', 'Z' => 'Y'), 4, 5));

$firephp->groupEnd();

?>