// functions

/**
 * This is a function.
 *
 * @param {string=} n           Optional
 * @param {string} [n]	        Optional
 * @param {(string\|number)} n	Multiple types
 * @param {*} n	                Any type
 * @param {...string} n	        Repeatable arguments
 * @param {string} [n="hi"]	    Optional with default
 * @param {string[]} n          Array of strings
 */

function foo(n) { return n }
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// variables

 /**
 * @type {number}
 */
var FOO = 1

/**
 * @const {number}
 */
const FOO = 1
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// imports

/**
 * @typedef {import('./Foo').default} Bar
 */

/**
 * @param {Bar} x
 */

function test(x) { }
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// other

/**
 * @throws {FooException}
 * @private
 * @deprecated
 * @see
 *
 * @function
 * @class
 */
 //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// renaming

/*
 * @alias Foo.bar
 * @name Foo.bar
 */
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// typedef

 /**
 * A song
 * @typedef {Object} Song
 * @property {string} title - The title
 * @property {string} artist - The artist
 * @property {number} year - The year
 */

/**
 * Plays a song
 * @param {Song} song - The {@link Song} to be played
 */

function play (song) {
}