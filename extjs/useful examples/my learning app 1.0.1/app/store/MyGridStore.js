Ext.define('MyApp.data.MyGridStore', {
	
	extend: 'Ext.data.Store',
	
	model: 'User',
	
	storeId: 'MyGridStore',
	
	proxy: {
		type: 'ajax',
		url: '/users.json',
	 reader: {
		type: 'json',
		rootProperty: 'users'
	 }
	},
	autoLoad: true
	
});