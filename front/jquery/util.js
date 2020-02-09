$.each(arr, function (index, value) {})
$.each(obj, function (key, value) {})

$.map(arr, function (value, index) {})
$.map(arr, function (prop, key) {})

$('p').each(function (index, domEl) {
	this === domEl // window if arrow fn
})