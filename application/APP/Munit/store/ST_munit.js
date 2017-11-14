Ext.define('Almindo.Munit.model.M_munit',{
	extend: 'Ext.data.Model',
	fields: ['unit_id', 'unit_nama', 'unit_desc']
});
        
Ext.define('Almindo.Munit.store.ST_munit',{
	extend: 'Ext.data.Store',
	model: 'Almindo.Munit.model.M_munit',
	autoLoad: true,
	autoSync: true,
                pageSize: 20,
	proxy: {
		type: 'ajax',
        actionMethods: 'POST',
		api: {
			read: base_url + 'Munit/read'
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