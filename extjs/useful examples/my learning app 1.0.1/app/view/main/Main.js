/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'MyApp.view.main.MainController',
        'MyApp.view.main.MainModel',
		'MyApp.data.MyGridStore'
    ],

    xtype: 'app-main',
    
    controller: 'main',
	
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'panel',
        bind: {
            title: '{name}'
        },
        region: 'west',
        /*html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',*/
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
		}],
        width: 250,
        split: true,
        tbar: [{
            text: 'Button',
            handler: 'onClickButton'
        }]
    }, {
		xtype: 'tabpanel',
        region: 'center',
        items: [{
            title: 'Tab 1',
            html: '<h2>Content appropriate for the current navigation.</h2>'
        }]
    }],
	initComponent:function(){
		Ext.create('MyApp.data.MyGridStore');
		this.callParent(arguments);

	}
});
