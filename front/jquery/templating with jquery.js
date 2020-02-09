/*
	<table class="suggestions">
		<!--
		<tr >
			<td class="list-item">
				<img src="" alt="Profile Pic"/>
				<span class="fullname-fa"></span><br />
				<span class="title"></span><br />
				<span class="username"></span><br />
				<span class="email"></span>
			</td>
		</tr>
		-->
		<tbody></tbody>
	</table>
*/
var getCommentsInside = function (selector) {
	return $(selector).contents().filter(function () { return this.nodeType == 8; });
};
var createHtml = function (arr) {
	//var html = '', classes = [],
	var els = [],
		tr,
		baseHtml = getCommentsInside('.suggestions')[0].nodeValue.trim();
	arr.forEach(function (i) {
		tr = $.parseHTML(baseHtml)[0];
		tr = $(tr);
		tr.find('img').attr('src', i.photo);
		tr.find('.autoc-fullname-fa').text(i.fullnameFa);
		tr.find('.autoc-title').text(i.title);
		tr.find('.autoc-username').text(i.username);
		tr.find('.autoc-email').text(i.email);
		els.push(tr[0]);
		/*									// better but still bad
		classes[0] = tr.find('td').attr('class');
		classes[1] = tr.find('td > nth-child(2) ').attr('class');
		classes[2] = tr.find('td > nth-child(4) ').attr('class');
		classes[3] = tr.find('td > nth-child(6) ').attr('class');
		classes[4] = tr.find('td > nth-child(8) ').attr('class');
		html +=	'<tr>';
		html +=		'<td class="'+ classes[0] +'">';
		html +=				'<img src="'							+ i.photo		+ '" alt="Profile Pic"/>';
		html +=				'<span class="'+ classes[1] +'">'		+ i.fullnameFa	+ '</span><br />';
		html +=				'<span class="'+ classes[2] +'">'		+ i.title		+ '</span><br />';
		html +=				'<span class="'+ classes[3] +'">'		+ i.username	+ '</span><br />';
		html +=				'<span class="'+ classes[4] +'">'		+ i.email		+ '</span>';
		html +=		'</td>';
		html +=	'</tr>';
		*/
		/*									// bad way (tight coupling)
		html +=	'<tr>';
		html +=		'<td class="list-item">';
		html +=				'<img src="'						+ i.photo		+ '" alt="Profile Pic"/>';
		html +=				'<span class="autoc-fullname-fa">'	+ i.fullnameFa	+ '</span><br />';
		html +=				'<span class="autoc-title">'		+ i.title		+ '</span><br />';
		html +=				'<span class="autoc-username">'		+ i.username	+ '</span><br />';
		html +=				'<span class="autoc-email">'		+ i.email		+ '</span>';
		html +=		'</td>';
		html +=	'</tr>';
		*/
	});
	els.forEach(function (i) {
		$('.suggestions > tbody').append(i);
	});
	//$('.suggestions > tbody').html(html);
};


var resp = [
	{
		photo: 'images/t.png',
		fullnameFa: 'محمد احمدی',
		title: 'برنامه نویس وب',
		username: 'moahammad-a',
		email: 'mohammad.ahmadi1989@yahoo.com'
	},
	{
		photo: 'images/t.png',
		fullnameFa: 'اصغر همدانی',
		title: 'گرافیست',
		username: 'asghar-h',
		email: 'asghar.a@tehran.ir'
	}
];
createHtml(resp);