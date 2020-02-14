//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//	Consider the following code snippet:
for (var i = 0; i < 5; i++) {
	var btn = document.createElement('button');
	btn.appendChild(document.createTextNode('Button ' + i));
	btn.addEventListener( 'click', function () { console.log(i); } );
	document.body.appendChild(btn);
}
/*
	(a) What gets logged to the console when the user clicks on “Button 4” and why?
	(b) Provide one or more alternate implementations that will work as expected.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	(a) No matter what button the user clicks the number 5 will always be logged to the console.
	This is because, at the point that the onclick method is invoked (for any of the buttons),
	the for loop has already completed and the variable i already has a value of 5.
	
	(Bonus points for the interviewee if they know enough to talk about how
	execution contexts, variable objects, activation objects,
	and the internal “scope” property contribute to the closure behavior.)

	(b) The key to making this work is to capture the value of i at each
	pass through the for loop by passing it into a newly created function object.
	Here are three possible ways to accomplish this:
*/
for (var i = 0; i < 5; i++) {
	var btn = document.createElement('button');
	btn.appendChild(document.createTextNode('Button ' + i));
	btn.addEventListener('click', (function (i) {
		return function () {
			console.log(i);
		};
	}(i)));
	document.body.appendChild(btn);
}
//	Alternatively, you could wrap the entire call to btn.addEventListener in the new anonymous function:
for (var i = 0; i < 5; i++) {
	var btn = document.createElement('button');
	btn.appendChild(document.createTextNode('Button ' + i));
	(function (i) {
	btn.addEventListener('click', function() { console.log(i); });
	}(i));
	document.body.appendChild(btn);
}
//	Or, we could replace the for loop with a call to the array object’s native forEach method:
['a', 'b', 'c', 'd', 'e'].forEach(function (value, i) {
	var btn = document.createElement('button');
	btn.appendChild(document.createTextNode('Button ' + i));
	btn.addEventListener('click', function () {
		console.log(i);
	});
	document.body.appendChild(btn);
});