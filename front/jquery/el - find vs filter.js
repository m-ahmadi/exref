var el = $(`
<ul>
	<li><a class="link"></a></li>
	<li><a class="link"></a></li>
</ul>`);

// find matches selector against descendents of element	(find selects a new mathed set)
// selecting something based on a selector, in children of an element
el.find('a');     // 2 a
el.find('li');    // 2 li
el.find('.link'); // 2 a


// filter matches selector against current element (filter reduces already mathed set)
el.filter('li');  // []
el.filter('ul');  // 1 ul
// or against direct childrens of the current element
el.contents().filter('a');  // []
el.contents().filter('li'); // 2 li