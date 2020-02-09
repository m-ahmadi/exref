//
Ext.define('Scout.view.MainTabpanel', {
	
	extend: 'Ext.tab.Panel',
	
	requires: [
		'Scout.view.MainGrid',
		'Scout.view.SearchbarPanel',
		'Scout.view.SearchbarButtonsContainer'
    ],
	
	xtype: 'main-tabpanel',
	
	region: 'center',
	rtl: true,
	

	items: [{
		title: 'دیده بان بازار',
		items: {
			xtype: 'searchbar-panel',
			
			items:[{
				
				xtype: 'searchbar-buttonscontainer'
				
			}, {
				
				xtype: 'main-grid'
				
			}]
		}
	}, {
		title: 'نقشه بازار',
		items: []
	}]
});