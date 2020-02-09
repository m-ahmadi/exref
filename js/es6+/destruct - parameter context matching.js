var log = console.log;

//-----------------------------------------
function h ({ name, val }) {
	log(name, val)
}
// same as:
function h (arg) {
	var name = arg.name;
	var val  = arg.val;
  log(name, val);
}

//-----------------------------------------
function f ([ name, val ]) {
	log(name, val)
}
// same as:
function f (arg) {
	var name = arg[0];
	var val  = arg[1];
	log(name, val);
}

//-----------------------------------------
function g ({ name: n, val: v }) {
	log(n, v)
}
// same as:
function g (arg) {
	var n = arg.name;
	var v = arg.val;
	log(n, v);
}