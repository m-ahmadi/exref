$(htmlString, ?ownerDocument)
$(htmlString, attributes)

$('<div>')                            // returns jq element (won't parse xml)
$('<div>', {id: 'foo', 'class': 'a'}) // set attribute
$('<div id="foo">')                   // ...
$('<div>').html('<p>hi</p>')          // set html inside
$('<p>').text('hello')                // set text inside

$('<div></div>', {
  'class': 'my-div',
  on: {
    touchstart: function (event) {}
  }
});

$.parseHTML('<div></div>')            // returns array of dom elements