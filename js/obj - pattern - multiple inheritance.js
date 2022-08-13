// basic idea (inherit from multiple objects)
var t = {a:'a'}

var s  = Object.create(t)

s.b = 'b'

var e = Object.create(s)

e.ee = 'eee'

var v = Object.create(e);
v.f = 'ko'

v.f  // owned
v.a  // inherited
v.b  // inherited
v.ee // inherited
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// basic extend function
//  second
function extend(proto, literal) {
  var result;
  result = Object.create(proto);
  if ( literal && isObject(literal) ) {
    Object.keys(literal).forEach(function(key) {
      result[key] = literal[key];
    });
  }
  return result;
}
//  first
function extend(proto, literal) {
  var result = Object.create(proto);
  Object.keys(literal).forEach(function(key) {
    result[key] = literal[key];
  });
  return result;
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// pass-by-reff  and  pass-by-val
/*  problem:
  if your object has a property and value of that is changing all the time,
  and your object is a mother object
  and other object that inherit from it also need the current value of that property,
  then you can't simply assign a value to a property,
  because what's end up in your property is a copy,
  and not the original value, so if the original value changes, your property will never know.
*/
function instantiate() {
  var p = false,
  
  getP = function () {
    return p;
  },
  setP = function (v) {
    p = v;
  };
  
  return {
    p: p,
    getP: getP,
    setP: setP
  };
}
var a = instantiate();
a.p     // false
a.getP()  // false
a.setP(true)
a.getP    // true
a.p     // false
//---------------------------------------------------------------------------------------------------------------
/*
  solution 1:   use getters (ES5)
*/
function instantiate() {
  var p = false,
  
  getP = function () {
    return p;
  },
  setP = function (v) {
    p = v;
  };
  
  return {
    get p() { return p; },
    getP: getP,
    setP: setP
  };
}
var a = instantiate();
a.p     // false
a.getP()  // false
a.setP(true)
a.getP    // true
a.p     // true
//---------------------------------------------------------------------------------------------------------------
/*
  solution 2:   use functions to simulate getters
*/
function instantiate() {
  var p = false,
  
  getP = function () {
    return p;
  },
  setP = function (v) {
    p = v;
  };
  
  return {
    getP: getP,
    setP: setP
  };
}
var a = instantiate();
a.getP()  // false
a.setP(true)
a.getP    // true
//---------------------------------------------------------------------------------------------------------------
/*  solution 3:   use objects
  you can assign a value to a property when that value is an object,
  but you should follow these rules:
    you don't touch the variable that holds the object,
    instead your methods change properties of the object,
  since objects are passed by refference in js, the property you just made is not a copy anymore,
  and is a refference to the same object your methods are working with,
  therefore if your methods change something in that object, you can see that change from outside.
  
  value assignment is only pass-by-refference for objects in js, everything else is pass-by-value (a copy).
*/
function instantiate() {
  var op = {p: false},
  
  getP = function () {
    return op.p;
  },
  setP = function (v) {
    op.p = v;
  };
  
  return {
    op: op,
    getP: getP,
    setP: setP
  };
}
var a = instantiate();
a.op.p    // false
a.getP()  // false
a.setP(true)
a.getP    // true
a.op.p    // false
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// methods work in the scope they were defined
function employee() {
  var inst = extend ( person() ),
    p = "ahmadi",
  
  s2 = function () {
    return p;
  },
  g2 = function (v) {
    p = v;
  };
  
  inst.s2 = s2;
  inst.g2 = g2;
  return inst;
}
function person() {
  var p = "mohammad",
    
  g = function () {
    return p;
  },
  s = function (v) {
    p = v;
  };
  
  return {
    g: g,
    s: s
  };
}
var t = employee();
t.g() // "mohammad"
t.g2()  // "ahmadi"

t.s(9)

t.g() // 9
t.g2()  // "ahmadi"

t.s2(4)

t.g() // 9
t.g2()  // 4
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// extend v3 (current version)
function extend() {
  var args = Array.prototype.slice.call(arguments),
    len = args.length,
    arr = [],
    objects = [],
    first, last,
    result;
    
  if (len === 1) {
    first = args[0];
    if ( isArray(first)  &&  first.length > 1 ) {
      last = first.pop();
      objects = first;
    } else if ( isObject(first) ){
      result = Object.create(first);
    }
  } else if (len === 2) {
    first = args[0];
    last = args[len-1];
    if ( isObject(first) ) {
      result = Object.create(first);
    }
  } else if (len > 2) {
    last = args.pop();
    objects = args;
  }
  
  if (objects.length !== 0) {
    arr.push( {} );
    objects.forEach(function (el, i) {
      if ( isObject(el) ) {
        Object.keys(el).forEach(function (k) {
          arr[i][k] = el[k];
        });
        arr.push( Object.create(arr[i]) );
      }
    });
    result = arr[arr.length-1];
  }
  
  if ( last && isObject(last) ) {
    Object.keys(last).forEach(function(key) {
      result[key] = last[key];
    });
  }
  return result;
}
var t = extend(
  {a: 'a'},
  {b: 'b'},
  {c: 'c'},
  {d: 'd'},
  {e: 'e'},
  {f: 'f'},
  {
    firstname: 'mohammad',
    lastname: 'ahmadi'
  }
);
var s = extend([
  {a: 'a'},
  {b: 'b'},
  {c: 'c'},
  {d: 'd'},
  {e: 'e'},
  {f: 'f'},
  {
    firstname: 'mohammad',
    lastname: 'ahmadi'
  }
]);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// extend v2
function extend() {
  var args = Array.prototype.slice.call(arguments),
    len = args.length,
    arr = [],
    first, last,
    result;
    
  if (len === 1) {
    first = args[0];
    if ( isObject(first) ) {
      result = Object.create(first);
    }
  } else if (len === 2) {
    first = args[0];
    last = args[len-1];
    if ( isObject(first) ) {
      result = Object.create(first);
    }
  } else if (len > 2) {
    last = args.pop();
    arr.push( {} );
    args.forEach(function (el, i) {
      if ( isObject(el) ) {
        Object.keys(el).forEach(function (k) {
          arr[i][k] = el[k];
        });
        arr.push( Object.create(arr[i]) );
      }
    });
    result = arr[arr.length-1];
  }
  
  if ( last && isObject(last) ) {
    Object.keys(last).forEach(function(key) {
      result[key] = last[key];
    });
  }
  return result;
}

var t = extend(
  {a: 'a'},
  {b: 'b'},
  {c: 'c'},
  {d: 'd'},
  {e: 'e'},
  {f: 'f'},
  {
    firstname: 'mohammad',
    lastname: 'ahmadi'
  }
);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// extend v1
function extend(proto, literal) {
  var arr = [],
    result;
    
  if ( isObject(proto) ) {
    result = Object.create(proto);
  } else if ( isArray(proto) ) {
    arr.push( {} );
    proto.forEach(function (el, i) {
      if ( isObject(el) ) {
        Object.keys(el).forEach(function (k) {
          arr[i][k] = el[k];
        });
        arr.push( Object.create(arr[i]) );
      }
    });
    result = arr[arr.length-1];
  }
  
  if ( literal && isObject(literal) ) {
    Object.keys(literal).forEach(function(key) {
      result[key] = literal[key];
    });
  }
  return result;
}

var inher = [
  {a: 'a'},
  {b: 'b'},
  {c: 'c'},
  {d: 'd'},
  {e: 'e'},
  {f: 'f'}
];
var t = extend(inher, {
  firstname: 'mohammad',
  lastname: 'ahmadi'
});
/*
arr.push( Object.create( proto[0] ) );
for (i=1; i<proto.length+1; i+=1) {
  if (  isObject( proto[i] )  ) {
    Object.keys( proto[i] ).forEach(function (k) {
      arr[i-1][k] = proto[i][k];
    });
    arr.push( Object.create(arr[i-1]) );
  }
}
*/

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// util
function isObject(v) {
  return (
    v &&
    typeof v === 'object' &&
    typeof v !== null &&
    Object.prototype.toString.call(v) === "[object Object]"
  ) ? true : false;
}
function isArray(v) {
  if ( typeof Array.isArray === 'function' ) {
    return Array.isArray(v);
  }
  return (
    v &&
    typeof v === 'object' &&
    typeof v.length === 'number' &&
    typeof v.splice === 'function' &&
    !v.propertyIsEnumerable('length') &&
    Object.prototype.toString.call(v) === "[object Array]"
  ) ? true : false;
}