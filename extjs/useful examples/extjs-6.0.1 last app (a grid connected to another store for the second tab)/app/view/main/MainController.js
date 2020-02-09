/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.show({
			title:'Save Changes?',
			message: 'You are closing a tab that has unsaved changes. Would you like to save your changes?',
			buttons: Ext.Msg.YESNOCANCEL,
			icon: Ext.Msg.QUESTION,
			fn: function(btn) {
				if (btn === 'yes') {
					console.log('Yes pressed');
				} else if (btn === 'no') {
					console.log('No pressed');
				} else {
					console.log('Cancel pressed');
				} 
			}
		});
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
