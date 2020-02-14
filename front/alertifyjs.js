// includes:
// alertify.css
// alertify.js
	
/* note:
this is the library from "alertifyjs.org"
there's another library called "alertify",
but its website is "alertifyjs.com"
very confusing! */
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// dialogs

// alert
alertify.alert('Message');

// confirm
alertify.confirm('Message', function () {
    // user clicked 'ok'
}, function() {
    // user clicked 'cancel'
});

// prompt
alertify
	.defaultValue('Default Value')
	.prompt(
		'This is a prompt dialog',
		function (val, ev) {
			// The click event is in the event variable, so you can use it here.
			ev.preventDefault();
			// The value entered is availble in the val variable.
			alertify.success('You've clicked OK and typed: ' + val);

		},
		function(ev) {
		// The click event is in the event variable, so you can use it here.
		ev.preventDefault();
		alertify.error('You've clicked Cancel');
		}
	);

// custom labels
alertify
	.okBtn('Accept')
	.cancelBtn('Deny')
	.confirm(
		'Confirm dialog with custom button labels',
		function (ev) {
			// The click event is in the
			// event variable, so you can use
			// it here.
			ev.preventDefault();
			alertify.success('You've clicked OK');

		},
		function(ev) {
			// The click event is in the
			// event variable, so you can use
			// it here.
			ev.preventDefault();

			alertify.error('You've clicked Cancel');

		}
	);

// ajax - multiple dialog
alertify.confirm(
	'Confirm?',
	function (ev) {
		// The click event is in the
		// event variable, so you can use
		// it here.
		ev.preventDefault();
		alertify.alert('Successful AJAX after OK');
	},
	function(ev) {
		// The click event is in the
		// event variable, so you can use
		// it here.
		ev.preventDefault();
		alertify.alert('Successful AJAX after Cancel');

	}
);

// promise aware
// If your browser supports promises, you can use them instead of callbacks:
if ('function' !== typeof Promise) {
	alertify.alert('Your browser doesn't support promises');
	return;
}
alertify.confirm('Confirm?').then(function (resolvedValue) {
	// 'resolvedValue' is an object with the following keys:
	// buttonClicked
	// inputValue (only for prompts)
	// event

	// The click event is in
	// resolvedValue, so you can use
	// it here.
	resolvedValue.event.preventDefault();
	alertify.alert('You clicked the ' + resolvedValue.buttonClicked + ' button!');
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// log messages

// setting the Position
alertify.delay(1000); // This is just to make the demo go faster.
alertify.log('Default botoom left position');
setTimeout(function() {
	alertify.logPosition('top left');
	alertify.log('top left');
}, 1500);
setTimeout(function() {
	alertify.logPosition('top right');
	alertify.log('top right');
}, 3000);
setTimeout(function() {
	alertify.logPosition('bottom right');
	alertify.log('bottom right');
}, 4500);
setTimeout(function() {
	alertify.reset(); // Puts the message back to default position.
	alertify.log('Back to default');
}, 6000);

// standard log
alertify.log('Standard log message');

// standard log with html
// HTML works just fine in log messages. Have at it!
var msg = ''
+	'<img src='https://placehold.it/256x128'>'
+	'<h3>This is HTML</h3>'
+	'<p>It's great, right?</p>';
alertify.log(msg);

// standard log with callback
/*
	keep in mind that the when setting a callback, clicking the log message doesn't automatically close the log message, which is different than previous functionality.
	this means that the callback could be called multiple times if the user clicks multiple times.
	if you're callback is an action that must be completed only once, you'll need to keep track of that separately.
*/
alertify.log('Standard log message with callback', function(ev) {
	// The click event is in the
	// event variable, so you can use
	// it here.
	ev.preventDefault();
	alertify.log('You clicked the notification');
});

// success log
alertify.success('Success log message');

// success log with callback
alertify.success('Standard log message with callback', function(ev) {
	// The click event is in the
	// event variable, so you can use
	// it here.
	ev.preventDefault();

	alertify.success('You clicked the notification');
});

// error Log
alertify.error('Error log message');

// error log with callback
alertify.error('Standard log message with callback', function(ev) {
	// The click event is in the
	// event variable, so you can use
	// it here.    ev.preventDefault();
	alertify.error('You clicked the notification');
});

// closing log on click
alertify
	.closeLogOnClick(true)
	.log('Click me to close!');
	
// disable log on click
/*
	clicking on a log message to close is disabled by default, but if you've enabled it and need to reset it to disabled, you can do so very easily.
	the decision to disable it by default was to allow any type of html to be included in the log messages, including links.
*/
alertify
	.closeLogOnClick(true)
	.log('Click me to close!')
	.closeLogOnClick(false)
	.log('You can't click to close this!');
	

alertify.delay(10000).log('Hiding in 10 seconds'); // hide in 10 seconds

// persistent Log
/*
	persistent log messages will stay until clicked (if closelogonclick(true) is set) or until forcibly removed when the number of messages exceeds the maxlogitems setting.
*/
alertify.delay(0).log('Will stay until clicked');

// maximum number of log messages
/*
	You can easily set the maximum number of log/success/error messages that will be displayed at a single time.
	The default is two.
*/
alertify
	.maxLogItems(1)
	.log('This is the first message');

// The timeout is just for visual effect.
setTimeout(function() {
	alertify.log('The second message will force the first to close.');
}, 1000);

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// other Options
// resetting default values
// when you change values like the button labels, delays, default prompt values or placeholders, etc., you can easily reset the defaults.
// notice the okay button is not the custom value, it was reset.
alertify
	.okBtn('Go For It!')
	.reset()
	.alert('Custom values were reset!');

// useful
alertify.theme('bootstrap');