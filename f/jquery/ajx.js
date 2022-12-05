$.ajax(url|settings, ?settings)

// shorhands:
$.get(url|settings, ?data, ?success, ?dataType)

$.post(url|settings, ?data, ?success, ?dataType)

$.load(url, ?data, ?complete)

$.getJSON(url, ?data, ?success)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
$.get('path/to/', callback)
$.ajax('path/to/', settings).done(callback)

res = await $.get('path/to/');
res = await $.ajax('path/to/');

$.ajax({
	url: 'path/to/',
	method: 'GET',
	data: {},
	beforeSend: function (jqXhr, settings) {},
	success:    function () {},		// v1.8 deprecated, use .done()
	error:      function () {},		// v1.8 deprecated, use .fail()
	complete:   function () {}		// v1.8 deprecated, use .always()
	
}).done  (function (data,       textStatus, jqXhr)             {})
	.fail  (function (jqXhr,      textStatus, errorThrown)       {})
	.always(function (data|jqXhr, textStatus, jqXhr|errorThrown) {});

const settings = {
	url: 'path/to/',
	method: 'GET'|'POST'|'PUT'|'DELETE',
	data: null| 'name=foo&job=bar'| {name: 'foo', job: 'bar'},
	dataType: 'html'|'json'|'xml'|'script'|'text',
	
	/* for cross-domain requests, a contentType other than "application/x-www-form-urlencoded","multipart/form-data","text/plain"
	will trigger the browser to send a preflight OPTIONS request to the server (eg: application/json) */
	contentType: 'application/x-www-form-urlencoded; charset=UTF-8'|'application/x-www-form-urlencoded'|'multipart/form-data'|'text/plain'|'application/json',
	
	headers: {
		'content-type': 'application/json', // same as contentType: 'application/json'
		'cache-control': 'no-cache'
	},
	
	statusCode: {
		404: function () {
			alert( 'page not found' );
		}
	},
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// $.get()
var jqxhr = $.get('example.php', function () {
  alert('success');
}).done(function () {
	alert('second success');
}).fail(function () {
	alert('error');
}).always(function () {
	alert('finished');
});
jqxhr.always(function () {
  alert('second finished');
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// $.post()
var jqxhr = $.post('example.php', function () {
  alert('success');
}).done(function () {
	alert('second success');
}).fail(function () {
	alert('error');
}).always(function () {
	alert('finished');
});
jqxhr.always(function () {
  alert('second finished');
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// $('#el').load()
// .load() method, unlike $.get(), inserts the result in selected item.
$('#result').load('ajax/test.html #container');
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// $.getJSON()
var jqxhr = $.getJSON('example.json', function () {
  console.log('success');
}).done(function () {
	console.log('second success');
}).fail(function () {
	console.log('error');
}).always(function () {
	console.log('complete');
});
jqxhr.complete(function () {
  console.log('second complete');
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@