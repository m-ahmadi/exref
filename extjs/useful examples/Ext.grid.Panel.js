xtype: 'gridpanel', 'grid'

Ext.create('Ext.data.Store', {
    storeId: 'simpsonsStore',
    fields:[ 'name', 'email', 'phone'],
    data: [
        { name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
        { name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
        { name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
        { name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
    ]
});

Ext.create('Ext.grid.Panel', {
    title: 'Simpsons',
    store: Ext.data.StoreManager.lookup('simpsonsStore'),
    columns: [
        { text: 'Name',  dataIndex: 'name'				},
        { text: 'Email', dataIndex: 'email', flex: 1	},
        { text: 'Phone', dataIndex: 'phone'				}
    ],
    height: 200,
    width: 400,
    renderTo: Ext.getBody()
});

columns: [
    {
        text: 'Name',
        dataIndex: 'name',
        sortable: false,
        hideable: false,
        flex: 1
    },
    {
        text: 'Email',
        dataIndex: 'email',
        hidden: true
    },
    {
        text: 'Phone',
        dataIndex: 'phone',
        width: 100
    }
]

columns: [
    {
        text: 'Email',
        dataIndex: 'email',
        renderer: function(value) {
            return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value);
        }
    }
]













// nesting: 
Ext.create('Ext.grid.Panel', {
	columnLines: true,
	height: 350,
	width: 600,
	title: 'Grouped Header Grid',
	
	columns: [{
		text     : 'Company',
		flex     : 1,
		sortable : false,
		dataIndex: 'company'
	}, {
		text: 'Stock Price',
		columns: [{
			text     : 'Price',
			width    : 75,
			sortable : true,
			renderer : 'usMoney',
			dataIndex: 'price'
		}, {
			text     : 'Change',
			width    : 75,
			sortable : true,
			dataIndex: 'change'
		}, {
			text     : '% Change',
			width    : 75,
			sortable : true,
			dataIndex: 'pctChange'
		}]
	}, {
		text     : 'Last Updated',
		width    : 85,
		sortable : true,
		dataIndex: 'lastChange'
	}],
	
	viewConfig: {
		stripeRows: true
	},
	renderTo: Ext.getBody()
});