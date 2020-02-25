//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
	Default dialogs
**/
// alert dialog
alertify.alert("Message");

// confirm dialog
alertify.confirm("Message", function (e) {
    if (e) {
        // user clicked "ok"
    } else {
        // user clicked "cancel"
    }
});

// prompt dialog
alertify.prompt("Message", function (e, str) {
    // str is the input text
    if (e) {
        // user clicked "ok"
    } else {
        // user clicked "cancel"
    }
}, "Default Value");
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
	Default notifications
**/
// standard notification
// setting the wait property to 0 will
// keep the log message until it's clicked
alertify.log("Notification", type, wait);

// success notification
// shorthand for alertify.log("Notification", "success");
alertify.success("Success notification");

// error notification
// shorthand for alertify.log("Notification", "error");
alertify.error("Error notification");
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
	Delay
**/
// using the `set` method
alertify.set( ... );

// time (in ms) before log message hides
// default: 5000
alertify.set({ delay: 10000 });
// log will hide after 10 seconds
alertify.log("Notification");
// setting the delay to 0 will leave
// the log message until it's clicked
alertify.log("Notification", "", 0);

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
	Button labels
**/

// custom OK and Cancel label
// default: OK, Cancel
alertify.set({ labels: {
    ok     : "Accept",
    cancel : "Deny"
} });
// button labels will be "Accept" and "Deny"
alertify.confirm("Message");


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
	Button focus
**/
// which button receives focus
// default: OK
alertify.set({ buttonFocus: "cancel" }); // "none", "ok", "cancel"
// focus will be given to the cancel button
alertify.confirm("Message");
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
	Button order
**/
// order of the buttons
// default: Cancel, OK
alertify.set({ buttonReverse: true }); // true, false
// buttons order will be OK, Cancel
alertify.confirm("Message");
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
	custom notification
**/
// extend log method
// set it
alertify.custom = alertify.extend("custom");
// use it
alertify.custom("Notification");
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
	custom themes
**/
// bootstrap theme
// use bootstrap theme CSS
// themes/alertify.bootstrap.css
alertify.prompt("message", ...);