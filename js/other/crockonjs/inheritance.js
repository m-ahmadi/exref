/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
/**    Pseudo-classical Inheritance    **/
/*
	Here's an example of how you can do things with what I call Pseudo-classical Inheritance:
	This was the inheritance scheme that was designed for the language,
	and I don't really care for it at all, I don't think it looks very good.
	So here we're defining a "Gizmo" and you can see that "Gizmo" is constructor,
	and then we add to the "Gizmo"s prototype the methods that we want the instances to inherit.
	This just looks really weird.
*/
function Gizmo(id) {
	this.id = id;
}
Gizmo.prototype.toString = function () {
	return "gizmo " + this.id;
};
/*
	We're sort-of used to the idea of a class kind-of containing all of its stuff,
	and in this case it's kind-of hanging on the end of it, in sort-of a half-hazard way.
	It also induces people to do things incorrectly,
	for example I've seen people trying to assign functions to prototypes inside of the constructor,
	because it just seems like that's where you should do it, and doing it on the outside just feels wrong,
	even though that's how you're suppose to do it.
*/
function Hoozit(id) {
	this.id = id;
}
Hoozit.prototype = new Gizmo();
Hoozit.prototype.test = function (id) {
	return this.id === id;
};
/*
	It gets even worse in the case of the "Hoozit", where I want the "Hoozit" to inherit from the "Gizmo",
	so the way I specify that in the language is, I replace "Hoozit" prototype with a new instance of "Gizmo",
	and that just looks crazy, and it's potentially dangerous:
	If it turns out that "Gizmo" constructor would throw if there were no parameters, then it would actually fail,
	but this is the way the language was intended to be used,
	and its because the language itself is confused about its prototypal nature,
	so I think there's a better way to do this, so let me suggest another formulation of exactly these same objects:
	and that's Prototypal Inheritance.
*/
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
/**    Prototypal Inheritance    **/
new_constructor(Object, function () {}, object)

var gizmo = new_constructor(Object, function (id) {
	this.id = id;
}, {
	toString: function () {
		return "gizmo " + this.id;
	}
});
var hoozit = new_constructor(gizmo, function (id) {
	this.id = id;
}, {
	test: function (id) {
		return this.id === id;
	}
});
/*
	So here I'm going to make a "gizmo" and to make it for me I'm going to call my "new_constructor" function,
	and it will make the new instance of "gizmo" or the new definer of "gizmo",
	and I will pass to it "Object" because I want "gizmo" to inherit from "Object",
	and I'm going to pass to it the constructor function,
	and I'm going to pass to it an object containing the methods that it should add to its own prototype,
	so this does the exactly same thing that we saw on the Pseudo-classical example, but I think it's just more pleasant looking,
	and then it's get even better with the "hoozit":
	so in defining the "hoozit" I call "new_constructor" passing the "gizmo", that says I want "hoozit" to inherit from "gizmo",
	and I also pass it a constructor
	and I also pass it an object containing additional methods that I want it to add to its prototype,
	so to my eye this looks a whole lot more rational than Pseudo-classical example did,
	with all the stuff hanging out and the weirdly placement.
	The language doesn't provide the "new_constructor" function that you need to do this,
	but it turns out it's a really easy function to write, so let's write that function:
*/
function new_constructor(extend, initializer, methods) {
	var func, prototype = Object.create(extend && extend.prototype);
	if (methods) {
		//Object.keys('methods').forEach(function (key) {				// doggie made a mistake? hahaha!
		methods.keys().forEach(function (key) {
			prototype[key] = methods[key];
		});
	}
	func = function () {
		var that = Object.create(prototype);
		if (typeof initializer === 'function') {
			initializer.apply(that, arguments);
		}
		return that;
	};
	func.prototype = prototype;
	prototype.constructor = func;
	return func;
}
/*
	So function "new_constructor" takes 3 parameters: "extend", "initializer" and "methods".
	First thing it does is:
	it creates the "prototype" object, which it makes by calling "Object.create",
	and then if there are "methods" available, it will call the "keys" method (this is a new thing in ES5),
	which will return an array of all of the owned keys of that object, which is really nice,
	because an array has a "forEach" method (in ES5), so we'll then call that,
	so that will allow us to easily copy all of the methods into the "prototype", really nice construction,
	then we'll create the function itself, which we'll use to make our "hoozit" or whatever,
	and you can see that Closure is working there (that variable),
	because it has access to "prototype", and it has access to the "initializer",
	so it will create a new instance of the prototype using "Object.create",
	which makes a new object that inherits from the object that you pass in,
	and it will then call the "initializer", passing that same object in,
	and when it's done it will return the object that we just created,
	so this does the same thing as "new", except we don't use "new",
	and then a little bit of extra plumbing, we don't really need to do this but just to be nice:
	we'll set the function's prototype property to the "prototype",
	because in the case of the "hoozit", the prototype got replaced and so we lost the constructor value,
	and we'll fix that there as well.
	So again we're using Closure in order to implement a classical pattern, and I think this works really nicely in the language.
*/
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
/**    Functional Inheritance    **/
/*
	Here's "Gizmo" and "Hoozit" again, and this how we would write it again in the Pseudo-classical style:
*/
function Gizmo(id) {
	this.id = id;
}
Gizmo.prototype.toString = function () {
	return "gizmo " + this.id;
};
function Hoozit(id) {
	this.id = id;
}
Hoozit.prototype = new Gizmo();
Hoozit.prototype.test = function (id) {
	return this.id === id;
};
/*
	It so bothers me how all the stuff is hanging out,
	and also "Gizmo" is got a constructor, and "Hoozit" is got a constructor,
	and they both do the same thing,
	so even though one inherits from the other, we don't get the advantage of that code reuse,
	some redundant waste to going on there.
	So I want to apply this functional system instead, so this is how I would write it:
*/
function gizmo(id) {
	return {
		id: id,
		toString: function () {
			return "gizmo " + this.id;
		}
	};
}
function hoozit(id) {
	var that = gizmo(id);
	that.test = function (testid) {
		return testid === this.id;
	};
	return that;
}
/*
	So I've got my "gizmo",
	it returns an object literal,
	done,
	that was really easy !
	and then my "hoozit" calls "gizmo" to create an instance,
	it augments "that" adding its test method,
	and returns "that",
	done.
	So it's really simple,
	but there are some other benefits that come from writing in this style,
	one is that we've got privacy, where right-now the way it's written the "id" is a global property of the object,
	so anybody can go in and get the "id" directly or modify it,
	maybe I don't want them to be able to do that,
	maybe the integrity of my object depends on nobody being able to mess with the "id",
	so writing this in the functional style, we can do that, and not only can we do that, the code gets simpler:
*/
/**    Privacy:    */
function gizmo(id) {
	return {
		toString: function () {
			return "gizmo " + id;
		}
	};
}
function hoozit(id) {
	var that= gizmo(id);
	that.test = function (testid) {
		return testid === id;
	};
	return that;
}
/*
	So we just don't have an "id" property in the object,
	we're referring now to the "id" parameter,
	and because of Closure our "toString" method always has access to that parameter,
	so we just took the "this"es out,
	and it's done,
	and we do a similar thing with "hoozit",
	so again it just became simpler.
	There are other things we could do too:
	We could have a shared secret which we pass between all of the constructors,
	which could be used to simulate something like a package relationship,
	where they all contain something that they know.
*/
/**    Shared Secrets:    */
function gizmo(id, secret) {
	secret = secret || {};
	secret.id = id;
	return {
		toString: function () {
			return "gizmo " + secret.id;
		};
	};
}
function hoozit(id) {
	var secret = {}; /*final*/
	var that = gizmo(id, secret);
	that.test = function (testid) {
		return testid === secret.id;
	};
	return that;
}
/*
	You can get arbitrary complicated with this stuff,
	usually you don't need to get anywhere this fancy,
	but it's nice knowing that you can if the need should ever arise.
*/
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/