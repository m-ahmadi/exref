var list = [
	'ActionScript',
	'AppleScript',
	'Asp',
	'BASIC',
	'C',
	'C++',
	'Clojure',
	'COBOL',
	'ColdFusion',
	'Erlang',
	'Fortran',
	'Groovy',
	'Haskell',
	'Java',
	'JavaScript',
	'Lisp',
	'Perl',
	'PHP',
	'Python',
	'Ruby',
	'Scala',
	'Scheme'
];
$('#tags').autocomplete({ source: list });
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
$('#autocomplete_1').autocomplete({
	source: 'http://100.80.1.176/cgi-bin/cpni'
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
$('#autocomplete_1').autocomplete({
	source: function (request, response) {
		$.ajax({
			url: 'http://100.80.1.176/cgi-bin/cpni',
			dataType: 'json',
			data : {
				action: 'AcUsername',
				session: 'abc',
				str: request.term
			},
			success: function( data ) {
				response(data[0])
			}
			
		});
	}
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
$('#autocomplete_1').autocomplete({
	source: function (request, response) {
		$.ajax({
			url: 'http://100.80.1.176/cgi-bin/cpni',
			dataType: 'json',
			data : {
				action: 'AcUsername',
				session: 'abc',
				str: request.term
			},
			success: function(data) {
				console.log(data);
				response(data[0])
			}
		});
	},
	select: function (event, ui) {
		console.log(ui);
		$('#users_list').empty();
		$('#users_list').append( $.parseHTML('<li class="list-group-item btn btn-default btn-lg"><a href="#">'+ui.item.value+'</a></li>') );
	}
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@