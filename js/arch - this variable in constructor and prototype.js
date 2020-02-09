function Person(first, last) {
	// this    ===    The object that will be created after calling new Person()
	this.firstname = first || 'John';
	this.lastname = last || 'Doe';
}
Person.prototype.fullname = function () {
	// this    ===    Same as in constructor, the instance created from Person constructor
	return this.firstname +' '+ this.lastname;
};
var hasan = new Person('hasan', 'rouhani');