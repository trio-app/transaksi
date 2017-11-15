Ext.define('Almindo.RPdate.controller.C_rpdate',{
	extend : 'Ext.app.Controller',
	views: ['Almindo.RPdate.view.FRM_rpdate',
			'Almindo.RPdate.view.GRID_rpdate',
			'Almindo.RPdate.view.GRIDS_rpdate'
		],
	store : [
				//'Almindo.RPdate.store.ST_rpdate'
		],
	refs: [{
				ref: 'FRM_rpdate',
				xtype: 'FRM_rpdate',
				selector: 'FRM_rpdate',
				autoCreate: true
			},{
				ref: 'GRID_rpdate',
				xtype: 'GRID_rpdate',
				selector: 'GRID_rpdate',
				autoCreate: true
			},{
				ref: 'GRIDS_rpdate',
				xtype: 'GRIDS_rpdate',
				selector: 'GRIDS_rpdate',
				autoCreate: true
		}],

		init: function (){
			this.control({
				'GRID_rpdate > toolbar > button[action=export]' : {
						click: this.exportTransaksi
				},
				'GRIDS_rpdate > toolbar > button[action=export]' : {
						click: this.exportDetail
				},
				'FRM_rpdate button[itemId=searchfilter]' : {
						click: this.filterasset
				},
				'GRID_rpdate': {
					itemclick: this.getData
				}

			});
		},

		filterasset: function(btn){
					var grid = this.getGRID_rpdate();
					var store = grid.getStore();
					var win = this.getFRM_rpdate();
					var values = win.down('form').getValues();


					 store.remoteFilter = false;
					 store.clearFilter();
					 store.remoteFilter = true;
					 store.filter([{
					 			value : values
				}]);
		},	

		getData: function(grid, record){
			var grid = this.getGRIDS_rpdate();

			var store = grid.getStore();


			Ext.Ajax.request({
					url : base_url + 'RpDate/getGrid',
					params: {transaksi_doc: record.data.transaksi_doc},
					method: 'POST',
					fields: ['transaksi_doc'],
					success: function(transport){
						store.loadData(Ext.decode(transport.responseText));
					}

			});
		}
});

