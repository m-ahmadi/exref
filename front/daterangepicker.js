/* includes:
bootstrap.css
daterangepicker.css
jquery.js
moment.js
daterangepicker.js */

$('input[name="daterange"]').daterangepicker();

$('input[name="daterange"]').daterangepicker(
	{
		locale: {
			format: 'YYYY-MM-DD'
		},
		startDate: '2013-01-01',
		endDate: '2013-12-31'
	},
	function (start, end, label) {
		alert("A new date range was chosen: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
	}
);



// <input type="text" name="daterange" value="01/01/2015 - 01/31/2015" />
$(function() {
	$('input[name="daterange"]').daterangepicker();
});


// <input type="text" name="daterange" value="01/01/2015 1:30 PM - 01/01/2015 2:00 PM" />
$(function() {
	$('input[name="daterange"]').daterangepicker({
		timePicker: true,
		timePickerIncrement: 30,
		locale: {
			format: 'MM/DD/YYYY h:mm A'
		}
	});
});