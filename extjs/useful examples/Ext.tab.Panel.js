'Ext.tab.Panel'		xtype: 'tabpanel'

Ext.tip.QuickTipManager.init();
Ext.create('Ext.tab.Panel', {
	
    width: 400,
	
    height: 400,
	
	region: 'center',
	
	activeTab: 0,
	
	tabPosition: 'bottom',
	
	plain: true,
	
    renderTo: document.body,
	
	listeners: {
        beforetabchange: function(tabs, newTab, oldTab) {
            return newTab.title != 'P2';
        }
    },
	
	handler : function() {
		tabs.setActiveTab(1);	// var tabs = Ext.create('Ext.tab.Panel');
		
		tabs.setActiveTab(tab);
		
		var tab = tabs.getActiveTab();
        alert('Current tab: ' + tab.title);
	},
	
	items: [{
		title: 'Tab 1',
		bodyPadding: 10,
		html : 'A simple tab'
	}, {
		title: 'Tab 2',
		html : 'Another one',
		hidden: false
	}, {
		title: 'Tab 3',
		html : 'Tab 3',
		tabConfig: {
            title: 'Custom Title',
            tooltip: 'A button tooltip'
        }
	}]
});
