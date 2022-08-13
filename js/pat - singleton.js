//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

var obj = {
	myprop: 'my value'
};
var obj2 = {
	myprop: 'my value'
};
obj === obj2; // false
obj == obj2; // false

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function Universe() {}
var uni = new Universe();
var uni2 = new Universe();
uni === uni2; // false

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function Universe() {

	if (typeof Universe.instance === "object") {
		return Universe.instance;
	}

	this.start_time = 0;
	this.bang = "Big";

	Universe.instance = this;

}
var uni = new Universe();
var uni2 = new Universe();
uni === uni2; // true

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function Universe() {
	var instance = this;
	
	this.start_time = 0;
	this.bang = "Big";
	
	Universe = function () {
		return instance;
	};
}
var uni = new Universe();
var uni2 = new Universe();
uni === uni2; // true

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

Universe.prototype.nothing = true;
var uni = new Universe();
Universe.prototype.everything = true;
var uni2 = new Universe();

uni.nothing;	 				// true
uni2.nothing;					// true
uni.everything;					// undefined
uni2.everything;				// undefined

uni.constructor.name;			// "Universe"
uni.constructor === Universe;	// false

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function Universe() {

	var instance;

	Universe = function Universe() {
		return instance;
	};

	Universe.prototype = this;

	instance = new Universe();

	instance.constructor = Universe;

	instance.start_time = 0;
	instance.bang = "Big";
	return instance;
}


Universe.prototype.nothing = true;		// true
var uni = new Universe();
Universe.prototype.everything = true;	// true
var uni2 = new Universe();
uni === uni2; 							// true
uni.nothing && uni.everything && uni2.nothing && uni2.everything; // true
uni.bang; // "Big"
uni.constructor === Universe; // true

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

var Universe;
(function () {
	var instance;
	Universe = function Universe() {
		if (instance) {
			return instance;
		}
		instance = this;

		this.start_time = 0;
		this.bang = "Big";
	};
}());

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@