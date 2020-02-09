Ext.define('MyApp.store.MyStore', {
	extend: 'Ext.data.Store',
	
	alias: 'store.mystore',
	
	fields: ['product', 'price', 'comment', 'availability'],
	
	data: { items: [
		{ product: 'Motherboard',	price: '600', 	comment: 'this motherboard is amazing', 	availability: 'Yes' },
		{ product: 'CPU',			price: '980', 	comment: 'I whish I could afford this CPU',	availability: 'Yes' },
		{ product: 'Ghraphics',		price: '800', 	comment: 'Boy this graphics card is good',	availability: 'No' },
		{ product: 'SSD Drive',		price: '400', 	comment: 'best drive u can ever buy',		availability: 'Yes' },
		{ product: 'Mouse',			price: '530', 	comment: 'only razor',						availability: 'No' }
	]},
	
	proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});