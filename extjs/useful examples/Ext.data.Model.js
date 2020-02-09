Ext.define('User', {
	
    extend: 'Ext.data.Model',
	
	belongsTo: 'AnotherModel',
	
	manyToMany: 'Group'
	
	belongsTo: [ 'AnotherModel', 'YetAnother' ]
	
	fields: [
		'name'
	],
	
	fields: [{
		name: 'addressId',
		reference: 'Address', // Adress is in another model, WOW 
		unique: true
	}],
	
	fields: [
        {name: 'name',  type: 'string'},
        {name: 'age',   type: 'int', convert: null},
        {name: 'phone', type: 'string'},
        {name: 'alive', type: 'boolean', defaultValue: true, convert: null}
    ],
	
	validators: {
        age: 'presence',
        name: { type: 'length', min: 2 },
        gender: { type: 'inclusion', list: ['Male', 'Female'] },
        username: [
            { type: 'exclusion', list: ['Admin', 'Operator'] },
            { type: 'format', matcher: /([a-z]+)[0-9]{2,3}/i }
        ]
    },
	
    changeName: function(newName) {
        var oldName = this.get('name');
        this.set('name', newName);
    }
});

// instanctciating:
var user = Ext.create('User', {
    id   : 'ABCD12345',
    name : 'Conan',
    age  : 24,
    phone: '555-555-5555'
});
user.changeName('alireza');
user.get('name');

var instance = Ext.create('User', {
    name: 'Ed',
    gender: 'Male',
    username: 'edspencer'
});
var validation = instance.getValidation();
