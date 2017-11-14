Ext.define('Almindo.Mwarnaglasin.model.M_mwarnaglasin',{
	extend: 'Ext.data.Model',
	fields: ['warnaglasin_id', 'warnaglasin_nama', 'warnaglasin_desc']
});
        
Ext.define('Almindo.Mwarnaglasin.store.ST_mwarnaglasin',{
	extend: 'Ext.data.Store',
	model: 'Almindo.Mwarnaglasin.model.M_mwarnaglasin',
	autoLoad: true,
	autoSync: true,
                pageSize: 20,
	proxy: {
		type: 'ajax',
        actionMethods: 'POST',
		api: {
			read: base_url + 'Mwarnaglasin/read'
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