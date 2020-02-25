// if the selected element has some css transition, 'animate' will not work.
$( '#book' ).animate( {opacity: '0'}, 5000, function () {} );

  
  
.animate(
	{ CSSPropertiesToGetAnimated width: '', height: '', },
	{
		duration : milliseconds,
		specialEasing: { forSaidCSSProperties width: '', height: ''},
		complete: function () {
			// execute when finished
			// this = element before .animate
		}
	}
).delay( milliseconds );




.animate(
	{},
	{
		duration : ,
		specialEasing: {},
		complete : function(){
			$(this).css({});
		}
	}
)
.delay();

// examples:
.animate(
	{right : '20'}, {
		duration: 2000,
		specialEasing: {right: 'easeOutCubic'}
	}
).delay(2000);

.animate(
	{top: '100', bottom: '200'},
	{
		duration : 2000,
		specialEasing: {top: 'easeOutCubic', bottom: 'easeOutBounce'},
		complete : function () {
			$(this).css({
				// toResetCSS
			});
		}
	}
);