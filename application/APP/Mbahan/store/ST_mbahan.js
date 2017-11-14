Ext.define('Almindo.Mbahan.model.M_mbahan',{
	extend: 'Ext.data.Model',
	fields: ['bahan_id','bahan_nama', 'bahan_merk', 'bahan_gambar', 'bahan_gap', 'bahan_bentuk', 'bahan_jenis','bahan_glasin','bahan_ukuranP','bahan_ukuranL','bahan_porporasi', 'bahan_mataperbaris', 'bahan_matapisau', 'bahan_warnacetakan', 'bahan_qtyname', 'bahan_totalname', 'bahan_core', 'bahan_arahgulungan', 'bahan_sensor', 'bahan_image']
});
        
Ext.define('Almindo.Mbahan.store.ST_mbahan',{
	extend: 'Ext.data.Store',
	model: 'Almindo.Mbahan.model.M_mbahan',
	autoLoad: true,
	autoSync: true,
                pageSize: 20,
	proxy: {
		type: 'ajax',
        actionMethods: 'POST',
		api: {
			read: base_url + 'Mbahan/read'
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