function ani() {
	$('.desc1').animate(
		{ top : '300' },
		{duration:1000, specialEasing: {top: 'easeOutBounce'}}
	).animate(
		{ top:'0' },
		{duration:1000, specialEasing: {top: 'easeOutBounce'}, complete: ani}
	);
}