//	1: Using the complete name of the class, which is the most used method:
Ext.create('MyApp.view.login.Login');

//	2: Using alias in the Ext.create method:
Ext.create('widget.login-dialog');

//	3: Using Ext.widget, which is shorthand for Ext.ClassManager. instantiateByAlias:
Ext.widget('login-dialog');

//	4: Using xtype as an item of another component:
items: [
	{
		xtype: 'login-dialog'
	}
]

//	5: Using the new keyword (discouraged):
new Packt.view.login.Login();



// Options 1, 2, 3, and 5 return a reference to the instantiated component