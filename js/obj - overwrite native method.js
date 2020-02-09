// Method 1
String.prototype.ourMethod = String.prototype.ourMethod || function() {
	// function body
};

// Method 2
if (typeof String.prototype.ourMethod !== 'function') {

	String.prototype.ourMethod = function() {
		// function body
	};
	
}