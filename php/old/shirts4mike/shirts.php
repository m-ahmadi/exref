<?php include('inc/products.php'); ?><?php
$pageTitle = 'Mike\'s Full Catalog Of Shirts';
$section = 'shirts';
include('inc/header.php'); ?>

	<div class="wrapper">
		<div class="section shirts page">
			<h1>Mike&rsquo;s Full Catalog Of Shirts</h1>
			<ul class="products">
				<?php foreach($products as $product_id => $product) { 
					echo get_list_view_html($product_id,$product);
					}
				?>
			</ul>
		</div>
	</div>

<?php include('inc/footer.php'); ?>