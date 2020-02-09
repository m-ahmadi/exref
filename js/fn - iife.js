// you can't execute function declarations immediately.
function () {}()      // SyntaxError

// so what's the alternative?
!function () {}()     // also returns the boolean opposite of function return value
+function () {}()
-function () {}()
~function () {}()

// same thing, more readable:
(function () {})()
(function () {}())