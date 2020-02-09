/*
	Ext.define						(defining a class)
	Ext.define	extend: ''			(extending a class)
	Ext.create						(instanciation from a class)
*/

// Define a class
Ext.define('Person', {
    name: '',
	
	email: '',
	
	phone: '',
	
	constructor: function(name) {
        this.name = name;
    },
	
	initComponent: function () {
		// apparently initComponent is the same thing as constructor, but using constructor is better
	},
	
	
    requires: [
		'Child',
		'Adult'
	], // List of classes that have to be loaded before instantiating this class.
	// and by loaded we mean the definition of the class gets loaded,
	// so note that the classes dont get loaded automatically when the application starts
	
	statics: {
		staticProperty: null,
		staticMethod: function () {}
	},
	
	privates: {
		privateProperty: null,
		privateMethod: function () {}
	},
	
	// this config object is what u pass to Ext.create in its 2nd arg
	config: {
	   foo: '',
	   bar: {
		   foo: 100,
		   bar: false
	   }
	},
	
	// public methods
    sayName: function() {
        alert("My Name is: "+ this.name);
    }
});

// we can define this way too
Ext.define({
	xtype: 'Person'
	// other props
}}
	
// Define a class which extends another class (which inherits from another class)
Ext.define('Developer', {
	extend: 'Person',
	sayName: function(text) {
		this.callParent(["print "+text]);
	}
});
// Instantciate a class
var person = Ext.create('Person', 'Bob');
var developer = Ext.create('Developer', 'John');