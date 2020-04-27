<?php

$products = array();
$products[101] = array(
	'name' => 'Logo Shirt, Red',
	'img' => 'img/shirts/shirt-101.jpg',
	'price' => 18,
	'paypal' => '9P7DLECFD4LKE',
    'sizes' => array('Small','Medium','Large','X-Large')
);
$products[102] = array(
	'name' => 'Mike the Frog Shirt, Black',
    'img' => 'img/shirts/shirt-102.jpg',
    'price' => 20,
    'paypal' => 'SXKPTHN2EES3J',
    'sizes' => array('Small','Medium','Large','X-Large')
);

foreach ($products as $p => $product){
	echo '<b>ID:</b> '.$p.'<br>';
	echo '<b>NAME:</b> '.$product['name'].'<br>';
	echo '<b>IMG PATH:</b> '.$product['img'].'<br>';
	echo '<b>PRICE:</b> '.$product['price'].'<br>';
	echo '<b>PAYPAL ID:</b> '.$product['paypal'].'<br>';
	
	echo '<b>AVAILABLE SIZES:</b> ';
	foreach ($product['sizes'] as $size) {
		echo $size.' - ';
	}
	echo '<br><br><br>';
}
?>