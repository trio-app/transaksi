		Ext.define('Almindo.Rpcustomer.controller.C_rpcustomer',{
			extend: 'Ext.app.Controller',
			views: [
				'Almindo.Rpcustomer.view.GRID_rpcustomer',
                                'Almindo.Rpcustomer.view.GRIDS_rpcustomer',
				'Almindo.Rpcustomer.view.FRM_rpcustomer'
			],
			stores  : [
				//'Almindo.Mwarnaglasin.store.ST_rpcustomer'
			],
			refs: [{
				ref: 'FRM_rpcustomer',
				xtype: 'FRM_rpcustomer',
				selector: 'FRM_rpcustomer',
				autoCreate: true
			},{
				ref: 'GRID_rpcustomer',
				xtype: 'GRID_rpcustomer',
				selector: 'GRID_rpcustomer',
				autoCreate: true
			},{
				ref: 'GRIDS_rpcustomer',
				xtype: 'GRIDS_rpcustomer',
				selector: 'GRIDS_rpcustomer',
				autoCreate: true
			}],
			init: function(){
				this.control({
					'GRID_rpcustomer > toolbar > button[action=export]': {
                                            click: this.exportTransaksi
                                        },
                                        'RCustomerSelectedGrid > toolbar > button[action=exportdetail]': {
                                            click: this.exportDetail
                                        },
                                        'GRID_rpcustomer > toolbar > textfield[itemId=searchData]': {
                                          specialkey: this.searchData
                                        },
                                        'FRM_rpcustomer button[itemId=searchfilter]': {
                                            click: this.filterasset
                                        },
                                        'GRID_rpcustomer': {
                                            itemclick: this.getData
                                        }
				});
			},
			searchData:function (f,e) {
				var store = Ext.getStore('Almindo.Rpcustomer.store.ST_rpcustomer');//Ext.getStore('Almindo.Mwarnaglasin.store.ST_rpcustomer');//
				if (e.getKey() == e.ENTER) {
					store.remoteFilter = false;
					store.clearFilter();
					store.remoteFilter = true;
					store.filter([{
						property:'filtername',
						anyMatch: true,
						value   : f.value
					} ]);
				}

			},filterasset: function (btn) {
                            var grid = this.getGRID_rpcustomer();
                            var store = grid.getStore();
                            var win = this.getFRM_rpcustomer();
                            var values = win.down('form').getValues();
                            
                            
                            store.remoteFilter = false;
                            store.clearFilter();
                            store.remoteFilter = true;
                            store.filter([{
                                    value   : values
                                } ]);
                        },getData: function(grid, record){
                            var grid = this.getGRIDS_rpcustomer();
                            //var grid = Ext.getCmp('InboundCancelSelectedGrid');
                            var store = grid.getStore();
                            //store.reload();
                                
                            Ext.Ajax.request({
                                url: base_url + 'Rpcustomer/getGrid',
                                params: {transaksi_doc: record.data.transaksi_doc},
                                method: 'POST',
                                fields: ['transaksi_doc'],
                                success: function(transport){
                                    store.loadData(Ext.decode(transport.responseText));
                                }
                            });
                        }	
						
		});