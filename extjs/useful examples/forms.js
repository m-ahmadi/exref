Ext.create('Ext.window.Window', {
	
	xtype: 'login-dialog',
	autoShow: true,
	height: 170,
	width: 360,
	layout: {
		type: 'fit'
	},
	iconCls: 'fa fa-key fa-lg',
	title: 'Login',
	closeAction: 'hide',
	closable: false,
	draggable: false,
	resizable: false,
	
	items: [{
		xtype: 'form',
		bodyPadding: 15,
		defaults: {
			xtype: 'textfield',
			anchor: '100%',
			labelWidth: 60
		},
		items: [{
			name: 'user',
			fieldLabel: 'User'
		}, {
			inputType: 'password',
			name: 'password',
			fieldLabel: 'Password'
		}]
	}]

});