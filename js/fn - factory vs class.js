var log = console.log;
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// factory (function returning object)
// best

function newGender(type) {
	let inst = {};
	inst.gender = type;
	
	inst.sayGender = function () {
		log(inst.gender); // or this.gender if u want (but context-less calls will no longer be available)
		return this;
	};
	
	return inst;
}
function newPerson(gender, name, age) {
	let _super_ = newGender(gender);
	let inst = Object.create( _super_ );
	
	let privateVariable;
	function privateFunction() {} // not possible with the other syntax
	
	inst.name = name;
	inst.age = age;
	
	inst.sayName = function () {
		log(name);
		return this;
	};
	inst.sayAge = function () {
		log(age);
		return this;
	};
	inst.saySomething = function () {
		// full access to super/base, derived, and invoked instances. (even returning them since they're values now).
		// differentiation between super/base, derived, and invoked instances in the context of current class.
		// _super_ === base instance
		// inst === derived instance
		// this === invoked instance
		log("you can break the chain here if u want");
		return inst;
	};
	
	return inst;
}
function newEmployee(gender, name, age, jobTitle) {
	let _super_ = newPerson(gender, name, age);
	let inst = Object.create( _super_ );
	
	inst.jobTitle = jobTitle;
	
	inst.sayJob = function () {
		log(jobTitle); // or this.jobTitle if u want (but no more context-less calls avaiable if u do)
		return this;
	};
	
	return inst;
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
class Gender {
	constructor(type) {
		this.gender = type;
	}
	sayGender() {
		log(this.gender);
		return this;
	}
}
class Person extends Gender {
	constructor(gender, name, age) {
		super(gender);
		this.name = name;
		this.age = age;
	}
	sayName() {
		log(this.name);
		return this;
	}
	sayAge() {
		log(this.age);
		return this;
	}
	saySomething() {
		// only limited access to super methods.
		// access limited to calling super methods/getters/setters and not public properties.
		// (also not possible to return them since they're just imaginary refrences and not values)
		// this === invoked instance
		// super === reference to implicit derived instance (not returnable since not value)
		// no access to super/base instance (instance of Person)
		log("you can't break the chain here, even if u wanted to");
		return this;
	}
}
class Employee extends Person {
	constructor(gender, name, age, jobTitle) {
		super(gender, name, age);
		this.jobTitle = jobTitle;
	}
	sayJob() {
		log(this.jobTitle);
		return this;
	}
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// method chaining
var t = new Employee("male", "mohammad", 28, "web developer")
t.sayGender()        //  "male"
	.sayName()       //  "mohammad"
	.sayAge()        //  28
	.saySomething()  //  "you can't break the chain here, even if u wanted to"
	.sayJob()        //  "web developer"

var t = newEmployee("male", "mohammad", 28, "web developer")
t.sayGender()        //  "male"
	.sayName()       //  "mohammad"
	.sayAge()        //  28
	.saySomething()  //  "you can break the chain here if u want"
	// I can't chain after this point since I returned the super and sayJob() is not defined on it.
	.sayJob()        //  "web developer"
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// context-less calls
var t = new Employee("male", "mohammad", 28, "web developer")
var sayJob = t.sayJob;
sayJob() // TypeError: Cannot read property 'jobTitle' of undefined

var t = newEmployee("male", "mohammad", 28, "web developer")
var sayJob = t.sayJob;
sayJob() // web developer
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// visual que
function constructor() {
	let inst = {};
	
	let varSome;
	function doSome() {} // accessed only from inside
	
	inst.prop
	inst.meth // accessed only from outside
	return inst;
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@