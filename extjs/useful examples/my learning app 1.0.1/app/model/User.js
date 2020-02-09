Ext.define('User', {
	extend: 'Ext.data.Model',
	fields: [
		{name: 'firstName', type: 'string'},
		{name: 'lastName',  type: 'string'},
		{name: 'age',       type: 'int'},
		{name: 'eyeColor',  type: 'string'}
	]
 });