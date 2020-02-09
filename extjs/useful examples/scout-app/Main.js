/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Scout.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'Scout.view.main.MainController',
        'Scout.view.main.MainModel',
		
		'Scout.view.MainTabpanel'
		
		// 'Scout.view.MainGrid',
		// 'Scout.view.SearchbarPanel',
		// 'Scout.view.SearchbarButtonsContainer'
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
		xtype: 'main-tabpanel'
	}]
    
});


/*
items: [{
	xtype: 'searchbar-panel',
	
	items:[{
		
		xtype: 'searchbar-buttonscontainer'
		
	}, {
		
		xtype: 'main-grid'
		
	}]
}]
*/


/*

items: [{
		xtype: 'panel',
		rtl: true,
        region: 'center',
        items:[{
            xtype: 'container',
			items: [{
				xtype: 'button',
				text: 'همه',
				enableToggle: true
				
			}, {
				xtype: 'button',
				text: 'پر ارزش ترینها',
				enableToggle: true
			}, {
				xtype: 'button',
				text: 'سودده ترین ها',
				enableToggle: true
			}]
			
        }, {
			xtype: 'main-grid'
			
		}]
    }]

*/


/*
{
        xtype: 'panel',
        bind: {
            title: '{name}'
        },
        region: 'west',
        html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
        width: 250,
        split: true,
        tbar: [{
            text: 'Button',
            handler: 'onClickButton'
        }]
    },
*/