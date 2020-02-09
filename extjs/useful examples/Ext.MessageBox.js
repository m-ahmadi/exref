Ext.Msg.alert('Status', 'Changes saved successfully.');

Ext.Msg.prompt('Name', 'Please enter your name:', function(btn, text){
    if (btn == 'ok'){
        // process text value and close...
    }
});

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

CANCEL
ERROR
INFO
NO
OK
OKCANCEL
QUESTION
WARNING
YES
YESNO
YESNOCANCEL



var myMsg = Ext.create('Ext.window.MessageBox', {
    // set closeAction to 'destroy' if this instance is not
    // intended to be reused by the application
    closeAction: 'destroy' // or 'hide'
}).show({
    title: 'Custom MessageBox Instance',
    message: 'I can exist along with Ext.Msg'
});

Ext.Msg.alert('Overlapping', 'Ext.Msg instance');