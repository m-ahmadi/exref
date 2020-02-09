/*
includes:
	qunit-2.1.1.css
	qunit-2.1.1.js

<div id="qunit"></div>
<div id="qunit-fixture"></div>	
*/

QUnit.test( "hello test", function ( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "a basic test example", function ( assert ) {
	var value = "hello";
	assert.equal( value, "hello", "We expect value to be hello" );
});