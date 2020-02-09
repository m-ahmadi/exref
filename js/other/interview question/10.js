//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?
*/
(function () {
	console.log(1); 
	
	setTimeout(function () {
		console.log(2);
	}, 1000); 
	
	setTimeout(function () {
		console.log(3);
	}, 0); 
	
	console.log(4);
}());
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	The values will be logged in the following order:
	1
	4
	3
	2
	
	Let’s first explain the parts of this that are presumably more obvious:
	1 and 4 are displayed first since they are logged by simple calls to console.log() without any delay
	2 is displayed after 3 because 2 is being logged after a delay of 1000 msecs (i.e., 1 second)
	whereas 3 is being logged after a delay of 0 msecs.
	
	OK, fine.
	
	But if 3 is being logged after a delay of 0 msecs, doesn’t that mean that it is being logged right away?
	And, if so, shouldn’t it be logged before 4, since 4 is being logged by a later line of code?

	The answer has to do with properly understanding JavaScript events and timing.
	The browser has an event loop which checks the event queue and processes pending events.
	For example,
	if an event happens in the background (e.g., a script onload event)
	while the browser is busy (e.g., processing an onclick),
	the event gets appended to the queue.
	When the onclick handler is complete,
	the queue is checked and the event is then handled (e.g., the onload script is executed).

	Similarly,
	setTimeout() also puts execution of its referenced function into the event queue if the browser is busy.
	When a value of zero is passed as the second argument to setTimeout(),
	it attempts to execute the specified function “as soon as possible”.
	Specifically, execution of the function is placed on the event queue to occur on the next timer tick.
	Note, though, that this is not immediate; the function is not executed until the next tick.
	That’s why in the above example, the call to console.log(4) occurs before the call to console.log(3)
	(since the call to console.log(3) is invoked via setTimeout, so it is slightly delayed).
*/