// Set up a model to use in our Store
Ext.define('User', {
	extend: 'Ext.data.Model',
	
	storeId: 'MyGridStore',
	
	proxy: {
		type: 'ajax',
		url: '/users.json',
	 reader: {
		type: 'json',
		rootProperty: 'users' // {"users": {}} in ~/users.json
	 }
	},
	
	autoLoad: true,
	
	fields: [
		{name: 'firstName', type: 'string'},
		{name: 'lastName',  type: 'string'},
		{name: 'age',       type: 'int'},
		{name: 'eyeColor',  type: 'string'}
	]
});

var myStore = Ext.create('Ext.data.Store', {
	model: 'User',
	
	// Inline data
	data : [
		{firstName: 'Peter',   lastName: 'Venkman'},
		{firstName: 'Egon',    lastName: 'Spengler'},
		{firstName: 'Ray',     lastName: 'Stantz'},
		{firstName: 'Winston', lastName: 'Zeddemore'}
	],
	
	
	proxy: {
		type: 'ajax',
		url: '/users.json',
		reader: {
			type: 'json',
			rootProperty: 'users'
		}
	},
	autoLoad: true	// load the data from model as soon as instantciation
});