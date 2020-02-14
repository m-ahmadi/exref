//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// current version
// off / unsubscribe
// once / publishOnce

function newPubSub() {
	"use strict";
	if ( this instanceof newPubSub ) { throw new Error('newPubSub() was called with new.'); }
	
	var subscribers = {},
		inst = {};	
	
	function initArr(str) {
			if ( isUndef( subscribers[str] ) ) {
				subscribers[str] = [];
			}
		}
	function add(str, fn, par, once) {
		var obj = {};
		initArr(str);
		obj.fn = fn;
		if (par) {
			obj.par = par;
		}
		if (once) {
			obj.once = true;
		}
		subscribers[str].push(obj);
	}
	function common(evt, fn, par, once) {
		var events;
		if ( evt.indexOf(' ') === -1 ) { // "click", function () {} 
			add(evt, fn, par, once);
		} else { // "click mousemove", function () {} 
			events = evt.trim().split(' ');
			if (events.length) {
				events.forEach(function (itm) {
					add(itm, fn, par, once);
				});
			}
		}
	}
	function oneArg(o) {
		Object.keys(o).forEach(function (i) {
			var prop = o[i];
			initArr(i);
			if ( isFn(prop) ) { // "click": function () {}
				add(i, prop);
			} else if ( isObj(prop) ) { // "click": {fn: function () {}, par: value, once: true}
				if ( isFn(prop.fn) ) {
					add(i, prop.fn, prop.par, prop.once);
				}
			}
		});
	}
	function check(args, action1, action2, opt) {
		var len = args.length,
			arg1, arg2, arg3, arg4;
		
		if (len === 1) {
			arg1 = args[0];
			if ( isObj(arg1) ) {
				action1(arg1);
			}
		} else if (len === 2) {
			arg1 = args[0];
			arg2 = args[1];
			if ( isStr(arg1) && isFn(arg2) ) {
				if (opt) {
					action2(arg1, arg2, undefined, true);
				} else {
					action2(arg1, arg2);
				}
			}
		} else if (len === 3) {
			arg1 = args[0];
			arg2 = args[1];
			arg3 = args[2];
			if ( isStr(arg1) && isFn(arg2) && arg3 ) {
				action2(arg1, arg2, arg3, opt ? opt : undefined);
			}
		} else if (len === 4) {
			arg1 = args[0];
			arg2 = args[1];
			arg3 = args[2];
			arg4 = args[3];
			if ( isStr(arg1) && isFn(arg2) && arg3 && arg4 ) {
				action2(arg1, arg2, arg3, arg4);
			}
		}
	}
	
	inst.getSubscribers = function () {
		return subscribers;
	};
	inst.subscribe = function (evt, fn, par, once) {
		var args = getArgs(arguments);
		check(args, oneArg, common);
	};
	inst.unsubscribe = function (evtName, fn) {
		var arr = subscribers[evtName],
			target;
		if ( isStr(evtName) && isFn(fn) ) {
			arr.forEach(function (itm, idx) {
				if ( itm.fn.toString() === fn.toString() ) {
					target = idx;
				}
			});
			arr.splice(target, 1);
		}
	}
	inst.publish = function (evtName, evtData) {
		var evts = subscribers[evtName],
			toDel;
		if ( !isUndef(evts) ) {
			evts.forEach(function (i, idx) {
				if (i.once) {
					i.fn(evtData, i.par);
					toDel = evtName;
				} else {
					i.fn(evtData, i.par);
				}
			});
			delete subscribers[toDel];
		}
	};
	inst.once = function () {
		var args = getArgs(arguments);
		check(args, oneArg, common, true);
	};
	// aliases
	inst.on = inst.subscribe;
	inst.off = inst.unsubscribe;
	inst.emit = inst.publish; 
	
	return inst;
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//															prev version
function instantiatePubsub() {
	"use strict";
	if ( this instanceof instantiatePubsub ) { throw new Error('instantiatePubsub() was called with new'); }
	
	var subscribers = {},
		inst = {};
	
	inst.getSubscribers = function () {
		return subscribers;
	};
	
	inst.subscribe = function (evt, fn, par) {
		var events,
			add = function (str) {
				if ( typeof subscribers[str] === 'undefined' ) {
					subscribers[str] = [];
				}
				subscribers[str].push({
					fn: fn,
					par: par
				});
			};
		
		if (typeof evt === 'string') {
			if ( evt.indexOf(' ') === -1 ) {
				add(evt);
			} else {
				events = evt.split(' ');
				events.forEach(function (el) {
					add(el);
				});
			}
		} else if ( util.isObj(evt) ) {
			Object.keys(evt).forEach(function (i) {
				if (typeof subscribers[i] === 'undefined') {
					subscribers[i] = [];
				}
				if ( typeof evt[i] === 'function' ) {
					subscribers[i].push({
						fn: evt[i],
						par: undefined
					});
				} else if ( util.isObj(evt[i]) ) {
					subscribers[i].push({
						fn: evt[i].fn,
						par: evt[i].par
					});
				}
			});
		}
	};
	
	inst.publish = function (evtName, evtData) {
		if (typeof subscribers[evtName] !== 'undefined') {
			subscribers[evtName].forEach(function (i) {
				i.fn(evtData, i.par);
			});
		}
	};
	
	inst.on = function (evt, fn, par) { // alias
		this.subscribe(evt, fn, par);
	};
	
	inst.emit = function (evtName, evtData) { // alias
		this.publish(evtName, evtData);
	};
	
	return inst;
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//													this referred to window (fixed in next version)
var instantiatePubsub = function () {
	if ( this instanceof instantiatePubsub ) { throw new Error('Don\'t call with new.'); }
	
	var subscribers = {},
	getSubscribers = function () {
		return subscribers;
	},
	subscribe = function (evt, fn, par) {
		var events,
			add = function (str) {
				if ( typeof subscribers[str] === 'undefined' ) {
					subscribers[str] = [];
				}
				subscribers[str].push({
					fn: fn,
					par: par
				});
			};
		
		if ( typeof evt === 'string' ) {
			if ( evt.indexOf(' ') === -1 ) {
				add(evt);
			} else {
				events = evt.split(' ');
				events.forEach(function (el) {
					add(el);
				});
			}
		} else if ( util.isObject(evt) ) {
			Object.keys(evt).forEach(function (i) {
				if ( typeof subscribers[i] === 'undefined' ) {
					subscribers[i] = [];
				}
				if ( typeof evt[i] === 'function' ) {
					subscribers[i].push({
						fn: evt[i],
						par: undefined
					});
				} else if ( util.isObject(evt[i]) ) {
					subscribers[i].push({
						fn: evt[i].fn,
						par: evt[i].par
					});
				}
			});
		}
	},
	on = function (evt, fn, par) { // alias
		subscribe(evt, fn, par);
	},
	publish = function (evtName, evtData) {
		if ( typeof subscribers[evtName] !== 'undefined' ) {
			subscribers[evtName].forEach(function (i) {
				i.fn( evtData, i.par );
			});
		}
	};
	return {
		getSubscribers: getSubscribers,
		subscribe: subscribe,
		on: on,
		publish: publish
	};
};
t.on('click', function() {alert('a')})
t.on('click change foo crap', function() {alert('aaaaaaallllllllllll')})
t.publish('click')
t.publish('change')
t.publish('foo')
t.publish('crap')
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//													different subscribe method (more mature)
var instantiatePubsub = function () {
	var subscribers = {},
	getSubscribers = function () {
		return subscribers;
	},
	subscribe = function (evt, fn, par) {
		if (typeof evt === 'string') {
			if (typeof subscribers[evt] === 'undefined') {
				subscribers[evt] = [];
			}
			subscribers[evt].push({
				fn: fn,
				par: par
			});
		} else if ( isObject(evt) ) {
			Object.keys(evt).forEach(function (i) {
				if (typeof subscribers[i] === 'undefined') {
					subscribers[i] = [];
				}
				if (typeof evt[i] === 'function') {
					subscribers[i].push({
						fn: evt[i],
						par: undefined
					});
				} else if ( isObject(evt[i]) ) {
					subscribers[i].push({
						fn: evt[i].fn,
						par: evt[i].par
					});
				}
			});
		}
	},
	on = function (evt, fn, par) { // alias
		subscribe(evt, fn, par);
	},
	publish = function (evtName, evtData) {
		if (typeof subscribers[evtName] !== 'undefined') {
			subscribers[evtName].forEach(function (i) {
				i.fn(evtData, i.par);
			});
		}
	};
	return {
		getSubscribers: getSubscribers,
		subscribe: subscribe,
		on: on,
		publish: publish
	};
};

var t = instantiatePubsub()
t.on('click', function() {alert('asd')})

t.on({
	poop: function() {alert('crap')}
})

t.on({
	come: {
		fn: function(o, p) {alert(p)},
		par: 'oh yeah'
	}
})
t.publish('click');
t.publish('poop');
t.publish('come');
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//															basic
var profile = (function () {
	var subscribers = {},
	
	subscribe = function (evt, fn, par) {
		if (typeof subscribers[evt] === 'undefined') {
			subscribers[evt] = [];
		}
		subscribers[evt].push({
			fn: fn,
			par: par
		});
	},
	publish = function (evtName) {
		subscribers[evtName].forEach(function (i) {
			i.fn(evtData, i.par); // evtData: data provided by the publisher,	i.par: data provided by subscriber.
		});
	};
	
	
	return {
		subscribe: subscribe,
		publish: publish
	};
}());

profile.subscribe('change', function (o) {alert('customer1'); alert(o.a); console.log(o); }, {a: 'a'} )
profile.subscribe('change', function (o) {alert('customer2'); console.log(o); } )
profile.subscribe('change', function () {alert('customer3');} )
profile.subscribe('come', function () {alert('semen1');} )
profile.subscribe('come', function (o) {alert('semen2'); console.log(o); }, {x: 'x', y: 'y'} )
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//															usage example
var instantiatePubsub = function () {
	var subscribers = {},
	
	getSubscribers = function () {
		return subscribers;
	}
	subscribe = function (evt, fn, par) {
		if (typeof subscribers[evt] === 'undefined') {
			subscribers[evt] = [];
		}
		subscribers[evt].push({
			fn: fn,
			par: par
		});
	},
	on = function (evt, fn, par) { // alies
		subscribe(evt, fn, par);
	},
	publish = function (evtName, evtData) {
		subscribers[evtName].forEach(function (i) {
			i.fn(evtData, i.par);
		});
	};
	
	
	return {
		getSubscribers: getSubscribers,
		subscribe: subscribe,
		publish: publish
	};
};

var profile = extend(instantiatePubsub(), (function () {
	
	var a = function () {
		return this.getSubscribers();
	};
	
	return {
		a: a
	};
}()));

profile.subscribe('change', function (o) {alert('c1');} )

var tab = extend(instantiatePubsub(), (function () {
	
	var t = function () {
		return this.getSubscribers();
	};
	
	return {
		t: t
	};
}()));

tab.subscribe('abc', function (o) {alert('a');})
tab.subscribe('xyz', function (o) {alert('x');})

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function isObject(v) {
	return (
		v &&
		typeof v === 'object' &&
		typeof v !== null &&
		Object.prototype.toString.call(v) === "[object Object]"
	) ? true : false;
}
function extend(proto, literal) {
	var result = Object.create(proto);
	Object.keys(literal).forEach(function(key) {
		result[key] = literal[key];
	});
	return result;
}