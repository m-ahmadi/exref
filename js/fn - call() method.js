var obj = {
    prop: 'Hi, how are ya?'
};

function func(arg) {
    alert(this.prop +'\n'+ arg);
}

// It's like saying:
// obj.func = func;
// obj.func('shalam');
func.call(obj, 'shalam'); 


var gg = {
	prop : 'been good'
};

func.call(gg, 'shalam');

/**********************************************************************/

var a = 'salam',
	b = 'olaghe',
	c = 'aziz',
	o = {
		a : 'halet',
		b : 'chetore',
		c : '?'
	};

function t() {
	console.log(this.a, this.b, this.c);
}
t();
t.call(o);
