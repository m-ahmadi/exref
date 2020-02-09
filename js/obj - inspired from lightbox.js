(function() {
	var c;
	
	c = (function() {
		function b() {
			this.firstname = 'mohammad';
			this.lastname = 'ahmadi';
		}
		b.prototype.fullName = function() {
			alert(this.firstname +' '+ this.lastname);
		};
		return b;
	})();
	
	
	d = (function() {
		function c(b) {
			this.p = 'f';
		}
		c.prototype.metod = function(arg) {
			alert('metod :' + arg)
		};
		return c;
	})();
	
	
	
	
	return new c();
	
}).call(this);