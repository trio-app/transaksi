Ext.define('Almindo.Mcategory.model.M_mcategory',{
	extend: 'Ext.data.Model',
	fields: ['category_id', 'category_nama', 'category_desc']
});
        
Ext.define('Almindo.Mcategory.store.ST_mcategory',{
	extend: 'Ext.data.Store',
	model: 'Almindo.Mcategory.model.M_mcategory',
	autoLoad: true,
	autoSync: true,
                pageSize: 20,
	proxy: {
		type: 'ajax',
        actionMethods: 'POST',
		api: {
			read: base_url + 'Mcategory/read'
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