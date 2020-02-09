/* includes:
jquery-2.0.3.js
animate-animo.css
animo.js
*/
$('#demo1').animo( { animation: 'tada' } );
$('#demo2').animo( { animation: ['tada', 'bounce'], duration: 2 } );
$('#demo3').animo( { animation: 'bounceInLeft', duration: 1 }, function () {
	$('#demo4').animo( { animation: 'bounceInRight', duration: 2 } );
});

// blurring of the image
$('#blur_img').animo('blur');
// Focus
$('#blur_img').animo('focus');