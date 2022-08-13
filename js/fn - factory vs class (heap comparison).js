// results are not final since I made another example and heap was the same size (needs more investigation)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 17.5MB
class Person {
	constructor(name, age) {
		this.name = name || "no_name";
		this.age  = age  || false;
	}
}
class Employee extends Person {
	constructor(name, age, jobTitle, id) {
		super(name, age);
		this.jobTitle  = jobTitle || "uknown_title";
		this.jobTitle  = jobTitle || "uknown_title";
		this.employeId = id       || "employe_"+(idCounter+=1);
	}
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// 90.5 MB
function newPerson(name, age) {
	var inst = {}; // the instance (this) 

	inst.name = name || "no_name";
	inst.age  = age  || false;

	return inst;
}
 
function newEmployee(name, age, jobTitle, id) {
	var inst = {}, // the instance (this) 
	person = newPerson(name, age),
	idCounter = 0;

	inst = u.extend( person, inst );

	inst.jobTitle  = jobTitle || "uknown_title";
	inst.employeId = id       || "employe_"+(idCounter+=1);

	return inst;
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

window.addEventListener("click", handler, false);


var list = [];
function handler(e) {
	
	for (let i=0; i<100000; i+=1) {
		list.push( new Employee("mohammad", Math.random(), "something", Math.random() ) );
	}
	
}