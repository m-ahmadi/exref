$('li:not(:first-child)')


$('li').slice(1).addClass('something');          // average time: 5.322ms
$('li:gt(0)').addClass('something');             // average time: 5.590ms
$('li:not(:first-child)').addClass('something'); // average time: 6.084ms
$('ul li+li').addClass('something');             // average time: 7.831ms