var arr = [ 'a', 'b', 'c', 'd' ];
var args = [{a: 'gholam'}, 44, 'fudge'];
func.apply(this, arr);
func.apply( this, args );

function func() {
	console.log(arguments);
}