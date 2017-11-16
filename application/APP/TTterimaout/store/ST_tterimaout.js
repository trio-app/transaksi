		Ext.define('Almindo.TTterimaout.model.M_tterimaout',{
			extend: 'Ext.data.Model',
			fields: ['receipt_id', 'receipt_doc', 'receipt_date', 'receipt_from', 'receipt_to', 'customer_id', 'customer_nama']
		});
                
                Ext.define('Almindo.TTterimaout.store.ST_tterimaout',{
			extend: 'Ext.data.Store',
			model: 'Almindo.TTterimaout.model.M_tterimaout',
			autoLoad: true,
			autoSync: true,
                        pageSize: 20,
			proxy: {
				type: 'ajax',
                                actionMethods: 'POST',
				api: {
					read: base_url + 'TTterimaout/read'
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
                
               