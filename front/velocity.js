// includes:
// velocity.js    | .min.js
// velocity.ui.js | .min.js

$element.velocity({
	width: '500px',
	property2: value2
}, {
// default options
	duration: 400,
	easing: 'swing',
	queue: '',
	begin: undefined,
	progress: undefined,
	complete: undefined,
	display: undefined,
	visibility: undefined,
	loop: false,
	delay: false,
	mobileHA: true
});

$element
	.velocity('slideDown')
	.velocity('slideUp')
	.velocity('fadeIn')
	.velocity('fadeOut')
    .velocity('slideDown', { duration: 1500 })
    .velocity('slideUp', { delay: 500, duration: 1500 });
	.velocity('fadeIn', 300)


// More:
$element.velocity({ top: 50 }, 1000);
$element.velocity({ top: 50 }, 1000, 'swing');
$element.velocity({ top: 50 }, 'swing');
$element.velocity({ top: 50 }, 1000, function() { alert('Hi'); });
$element.velocity({
    top: 50,
    left: '50%',
    width: '+=5rem',
    height: '*=2'
});
$element.velocity({ width: 75 }).velocity({ height: 0 });
$element.velocity({ opacity: 1 }, { duration: 1000 });
$element.velocity({ opacity: 1 }, { duration: 'slow' });

$element
	.velocity('fadeIn', { duration: 1500 })
	.velocity('fadeOut', { delay: 500, duration: 1500 });
	
$element
	.velocity('slideDown', { duration: 1500 })
	.velocity('slideUp', { delay: 500, duration: 1500 });
	
$element
	.velocity('scroll', { duration: 1500, easing: 'spring' })
	.velocity({ opacity: 1 });

$element
	.velocity('callout.shake')
	.velocity('callout.tada', { delay: 1000 });

// detect if element is currently been animated:
.is('.velocity-animating') // instead of .is(':animated')