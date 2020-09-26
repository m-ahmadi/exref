(function() {
	//'use strict';
	var a = b = 7;
	
	//var a = b;
	//b = 7;
	
}());
console.log(b);

// var b = 7;
// var a = b;


(function() {
   'use strict';
   
   var a = window.b = 5;
   // var a = b = 5  ---->  Uncaught ReferenceError: b is not defined
   
})();
console.log(b);

// window.b = 5;
// var a = window.b;