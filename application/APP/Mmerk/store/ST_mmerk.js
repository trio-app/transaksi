	Ext.define('Almindo.Mmerk.model.M_mmerk',{
		extend: 'Ext.data.Model',
		fields: ['merk_id', 'merk_nama','merk_desc']
	});

	Ext.define('Almindo.Mmerk.store.ST_mmerk',{
		extend: 'Ext.data.Store',
		model: 'Almindo.Mmerk.model.M_mmerk',
		autoLoad: true,
		autoSync: true,
					pageSize: 20,
		proxy: {
		type: 'ajax',
        actionMethods: 'POST',
		api: {
			read: base_url + 'Mmerk/read'
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
