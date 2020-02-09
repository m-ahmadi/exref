'Ext.container.Container'		xtype: 'container'

Ext.define('Container', {
    extend: 'Ext.container.Container',
    requires: [
        'MainController',
        'MainModel',
		'MainStore'
    ],

    xtype: 'app-main',	// I guess we're defining a xtype so that we can create this class with xtype.
    
    controller: 'main',	// A string alias, a configuration object or an instance of a ViewController for this container.
	
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },
	
	initComponent: function () {
		Ext.create('Store'); // this Store should be defined first
		this.callParent(arguments);
	},
	
    items: [{
		//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        xtype: 'panel',
		width: 250,
        split: true,
		region: 'west',
        bind: {
            title: '{name}'
        },
        tbar: [{
            text: 'Button',
            handler: 'onClickButton'
        }]
		items: [{
			xtype: 'grid',
			store: 'MyGridStore',
			plugins: {
				ptype: 'cellediting',
				clicksToEdit: 1
			},
			columns: [{
				xtype:'rownumberer'
			}, {
				text:'name',
				dataIndex:'firstName',
				flex:1
			}, {
				text: 'Last Name',
				dataIndex: 'lastName',
				editor:{
					xtype:'textfield'
				},
				flex:1				
			}, {
				text:'person age',
				dataIndex:'age',
				renderer:function(v){
					return v <= 7 ? 'child' : 'adult';
				}
			}]
		}]
		//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    }, {
		//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
		xtype: 'tabpanel',
        region: 'center',
        items: [{
			title: 'Tab 1',
			html: '<h2>Content appropriate for the current navigation.</h2>'
        }]
		//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    }]
	
});
