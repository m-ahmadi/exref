// all the same:
var a = {
	...condition && {b: 5}
	...(condition && {b: 5})
	...(condition) && {b: 5}
	...(condition? {b: 5}: {} )
}
/* how?
spread operator is like a shorthand of Object.assign and has lower precedence than && operator.
it ignores values without properties (boolean, null, undefined, number),
but adds all properties of the object after ... in place. */

// or
var a = {
	[isConditionTrue() && 'propertyName']: 'propertyValue'
}
// or
Object.assign({}, conditionA ? { b: 1 } : null,
                  conditionB ? { c: 2 } : null,
                  conditionC ? { d: 3 } : null);
// or
var a = new function () {
	if (conditionB) this.b = 5;
	if (conditionC) this.c = 5;
	if (conditionD) this.d = 5;
};
//------------------------------------------------------------------------------
// getter setter
var a = {
	...condition && { get foo(){return 99} },
	...condition && { set bar(v){window.x=v} },
}