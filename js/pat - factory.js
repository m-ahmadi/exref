var corolla = CarMaker.factory('Compact');
var solstice = CarMaker.factory('Convertible');
var cherokee = CarMaker.factory('SUV');
corolla.drive(); // "Vroom, I have 4 doors"
solstice.drive(); // "Vroom, I have 2 doors"
cherokee.drive(); // "Vroom, I have 17 doors"var name = 'John Doe';

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function CarMaker() {}

CarMaker.prototype.drive = function () {
	return "Vroom, I have " + this.doors + " doors";
};

CarMaker.factory = function (type) {
	var constr = type,
	newcar;

	if (typeof CarMaker[constr] !== "function") {
		throw {
			name: "Error",
			message: constr + " doesn't exist"
		};
	}

	if (typeof CarMaker[constr].prototype.drive !== "function") {
		CarMaker[constr].prototype = new CarMaker();
	}

	newcar = new CarMaker[constr]();

	return newcar;
};

CarMaker.Compact = function () {
	this.doors = 4;
};
CarMaker.Convertible = function () {
	this.doors = 2;
};
CarMaker.SUV = function () {
	this.doors = 24;
};

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

var o = new Object(),
n = new Object(1),
s = Object('1'),
b = Object(true);
o.constructor === Object;	// true
n.constructor === Number;	// true
s.constructor === String;	// true
b.constructor === Boolean;	// true