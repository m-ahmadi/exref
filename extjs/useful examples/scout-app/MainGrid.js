// grid, gridpanel
Ext.define('Scout.view.MainGrid', {
	
	extend: 'Ext.grid.Panel',
	
	xtype: 'main-grid',
	
	columns: {
	
		defaults: {
			align: 'center'
		},

		items: [{
				text: 'نماد/وضعیت',
				dataIndex: 'status'
				
			}, {
				text: 'قیمت',
				dataIndex: 'price'
			}, {
				text: 'قیمت پایانی',
				dataIndex: 'final-price'
			}, {
				text: 'حجم معامله',
				dataIndex: 'trade-density'
			}, {
				text: 'تعداد معامله',
				dataIndex: 'trade-quantity'
			}, {
				text: 'ارزش',
				dataIndex: 'value'
			}, {
				text: 'تغییر صف',
				dataIndex: 'line-change'
			}, {
				text: 'وضعیت صف',
				dataIndex: 'line-status'
			}, {
				text: 'قیمت بر درآمد',
				columns: [{
					text: 'EPS'
				}, {
					text: 'P/E'
				}, {
					text: 'گروه P/E'
				}]
			}, {
				text:'حقیقی و حقوقی',
				columns: [{
					text: 'موقعیت سهم'
				}, {
					text: 'حجم خرید'
				}, {
					text: 'درصد خرید'
				}, {
					text: 'تعداد خریدار'
				}, {
					text: 'تعداد فروشنده'
				}]
			}, {
				text: 'الگو کندل ترکیبی'
			}
		]
	}
	
});