//


Ext.define('MyApp.view.main.MyList', {
	extend: 'Ext.grid.Panel',
	
	xtype: 'mygrid',
	
	title: 'This is My Tab',
	
	requires: [
		'MyApp.store.MyStore'
	],
	title: 'here is my title',
	
	store: {
        type: 'mystore'
    },

    columns: [
        { text: 'Product',		dataIndex: 'Product' },
        { text: 'Price',		dataIndex: 'Price', flex: 1 },
        { text: 'Comment',		dataIndex: 'Comment', flex: 1 },
		{ text: 'Availability',	dataIndex: 'Availability', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});