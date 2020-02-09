Ext.create('Ext.window.Window', {
    title: 'Hello',
	
	autoShow: false,	// if true: no need to .show();
    height: 200,
	
    width: 400,
	
    layout: 'fit',
	
	// or
	layout: {
		'fit'
	},
	
    items: { // fit layout
        xtype: 'grid',
        border: false,
        columns: [{header: 'World'}],                // One header just for show. There's no data,
        store: Ext.create('Ext.data.ArrayStore', {}) // A dummy empty data store
    }
	
}).show();