	Ext.define('Almindo.RPdate.model.M_rpdate',{
		extend: 'Ext.data.Model',
		fields: ['Amount','transaksi_customer','transaksi_doc','transaksi_date','customer_nama','trdetail_doc','trdetail_amount']
	});

	Ext.define('Almindo.RPdate.store.ST_rpdate',{
		extend: 'Ext.data.Store',
		model: 'Almindo.RPdate.model.M_rpdate',
		autoLoad: true,
		autoSync: true,
	                pageSize: 20,
		proxy: {
			type: 'ajax',
	        actionMethods: 'POST',
			api: {
				read: base_url + 'RpDate/read'
			},
			reader: {
				type: 'json',
				root: 'Rows',
				totalProperty: 'TotalRows',
				successProperty: 'success'
			},
			writer: {
				type: 'json',
				writeAllFields: false
			}
		}

	});