var name = 'John Doe';
var obj = {
	name: 'tushmaze',
//  prop: this.name,
	getName : function() {
		return this.name;
	}
};

obj.getName();

var t = obj.getName;
t();
t.call(obj);

// "this" only in methods and not properties