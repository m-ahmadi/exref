<?php
session_start();

$product = Array('motherboard','cpu','graphic','memory','myBeutiful_ass');

array_splice($product, array_search('cpu',$product),1);

print_R($product);

?>