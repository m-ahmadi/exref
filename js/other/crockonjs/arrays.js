// We have arrays in JavaScript, arrays are very common in all programming languages.
// An array is a contiguous sequence of memory, divided in equal-size slots,
// and then you give it an index number, and that computes which slot you're in and give the value back.
// Array is the fastest of all data structures.
// Turns out JavaScript doesn't have anything like that!
// What JavaScript has is objects, and it uses its objects to simulate an array.
// The way arrays work is we take the index, turn it into a number, stick it in an object,
// so it does its hash operation, figures out what bucket to put it in and creates a property (all overhead),
// so every time you access a field in the object, we're having to do a hash look-up,
// so the speed advantages that you'd like to have in array are not present.
// Turns out this is really efficient for spares arrays. But it turns out we never use spares arrays,
// that's not just part of something that we see in web applications, where arrays are dense, so they're really inefficient.
// They do provide one advantage to the programmer:
// there's no need to define a length on array, because they don't actually have a length,
// so when you create an array, you're not setting a side a bucket of memory,
// it's an object and it can grow dynamically as it needs to, so there' no need to dimension it,
// that turns out to be really nice.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** Arrays **/
// Array inherits from 'object'.
// Indexes are converted to strings and used as names for retrieving values.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** length **/
// Arrays have a special "length" property (unlike objects).
// It's an accessor property which changes.
// It is always 1 larger than the highest integer subscript that is stored in the array, and
// that's not the same as the actual length of the array and it's not the number of members of the array either,
// It's 1 more than the last property in the array.
// (if it's a denser array it will be the same, but if it's sparse, they could be very very different.)
// It allows use of the traditional "for" statement.
for (i = 0; i < a.length; i++) {
	// ...
}
// Do not use "for in" with arrays.
// "for in" does not guarantee what order it's going to bring the items out.
// Generally when you working with an array you want to do it in order.
// If your program depends on "for in" producing keys in a particular sequence, your program is in error,
// and it could break in some future version of the language.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** Array Literals **/
// An array literal uses [].
// It can contain any number of expressions separated by commas.
var array = ['red', 'blue', 'green']; // length is 3
// New Items can be appended.
array[array.length] = 'yellow'; // now length is 4
// In some languages this would cause you an array bonds error, because we're adding something beyond the end of the array.
// Arrays in this language don't have bonds, because they're not really arrays, they're objects, so that's not a problem.
// The dot notation should not be used with arrays, you can use dot for getting array methods.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** Array Methods **/
concat
every
filter
forEach // ES5
indexOf
join
lastIndexOf
map // ES5
pop
push
reduce
reduceRight
reverse
shift
slice
some
splice
toLocaleString
toString
unshift
// You pass "forEach"/"map" function a function, and that function then will be called for each element of the array.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** sort method **/
// "sort" method has some surprising behaviour:
var n = [4, 8, 15, 16, 23, 42];
n.sort();
// n is [15, 16, 23, 4, 42, 8]
// It evaluated each number as though they were strings.
// Fortunately "sort" allows you to pass in your own comparison function,
// which will get passed pairs of values and then you'd return the value based on which one you think should come first. 
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/** Deleting Elements **/
array = ['a', 'b', 'c', 'd']
delete array[number]; 
// Removes the element but leaves a hole in the numbering
// ['a', undefined, 'c', 'd']
array.splice(number, 1);
// Removes the element and renumbers all the following elements
// ['a', 'c', 'd']
// "splice" goes through the array and rehash everything, so it's a slow process and it's not fast.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**  Arrays v Objects **/
// Arrays and Objects are almost the same in this language.
// Use objects when the names are arbitrary strings.
// Use arrays when the names are sequential integers.
// Don't get confused by the term Associative Array, in this language object is the Associative Array.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@