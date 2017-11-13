Ext.define('Almindo.Mitem.model.M_mitem',{
	extend: 'Ext.data.Model',
	fields: ['item_id', 'item_kode', 'item_nama', 'item_category', 'item_unit', 'item_harga', 'item_weight', 'item_upp']
});
        
Ext.define('Almindo.Mitem.store.ST_mitem',{
	extend: 'Ext.data.Store',
	model: 'Almindo.Mitem.model.M_mitem',
	autoLoad: true,
	autoSync: true,
                pageSize: 20,
	proxy: {
		type: 'ajax',
        actionMethods: 'POST',
		api: {
			read: base_url + 'Mitem/read'
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