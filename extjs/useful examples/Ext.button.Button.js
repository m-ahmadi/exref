'Ext.Button' === 'Ext.button.Button'
xtype: 'button'

Ext.create('Ext.button.Button', {
	
    text: 'Click me',
	
	scale   : 'large',
	
	enableToggle: true,
	
	arrowAlign: 'bottom', // if the button has an associated menu,
	
	padding: 10, // 10 10 10 10
    
    renderTo: Ext.getBody(),
	
    handler: function() {
        alert('You clicked the button!');
		
		if (this.clickCount) {
            this.clickCount++;
            alert('You have clicked the button "' + this.clickCount + '" times.\n\nTry clicking it again..');
        } else {
            this.clickCount = 1;
            alert('You just clicked the button for the first time!\n\nTry pressing it again..');
        }
    },
	
	listeners: {
        click: function() {
            // this == the button, as we are in the local scope
            this.setText('I was clicked!');
        },
        mouseover: function() {
            // set a new config which says we moused over, if not already set
            if (!this.mousedOver) {
                this.mousedOver = true;
                alert('You moused over a button!\n\nI wont do this again.');
            }
        }
    },
	
	menu: [
        {text: 'Item 1'},
        {text: 'Item 2'},
        {text: 'Item 3'},
        {text: 'Item 4'}
    ]
	
});


Ext.create('Ext.Container', {
    renderTo: Ext.getBody(),
    items   : [
        {
            xtype: 'button',
            text : 'My Button'
			// Ext.Button properties
        }
    ]
});