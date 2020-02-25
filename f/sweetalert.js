/* includes:
~/dist/sweetalert.css
~/dist/sweetalert.min.js
themes:
	~/dist/sweetalert.css
	~/themes/twitter/twitter.css */

swal("Hello world!");

swal("Oops...", "Something went wrong!", "error");

swal({
	title: "Are you sure?",
	text: "You will not be able to recover this imaginary file!",
	type: "warning",
	showCancelButton: true,
	confirmButtonColor: "#DD6B55",
	confirmButtonText: "Yes, delete it!",
	closeOnConfirm: false,
	html: false
}, function () {
	swal("Deleted!",
	"Your imaginary file has been deleted.",
	"success");
});

swal({
	title: "An input!",
	text: 'Write something interesting:',
	type: 'input',
	showCancelButton: true,
	closeOnConfirm: false,
	animation: "slide-from-top"
}, function (inputValue) {
	console.log("You wrote", inputValue);
});

swal({
	title: 'Ajax request example',
	text: 'Submit to run ajax request',
	type: 'info',
	showCancelButton: true,
	closeOnConfirm: false,
	disableButtonsOnConfirm: true,
	confirmLoadingButtonColor: '#DD6B55'
}, function (inputValue) {
	setTimeout(function () {
		swal('Ajax request finished!');
	}, 2000);
});