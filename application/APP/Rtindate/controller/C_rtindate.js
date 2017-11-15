		Ext.define('Almindo.Rtindate.controller.C_rtindate',{
			extend: 'Ext.app.Controller',
			views: [
				'Almindo.Rtindate.view.GRID_rtindate',
                                'Almindo.Rtindate.view.GRIDS_rtindate',
				'Almindo.Rtindate.view.FRM_rtindate'
			],
			stores  : [
				//'Almindo.Mwarnaglasin.store.ST_rtindate'
			],
			refs: [{
				ref: 'FRM_rtindate',
				xtype: 'FRM_rtindate',
				selector: 'FRM_rtindate',
				autoCreate: true
			},{
				ref: 'GRID_rtindate',
				xtype: 'GRID_rtindate',
				selector: 'GRID_rtindate',
				autoCreate: true
			},{
				ref: 'GRIDS_rtindate',
				xtype: 'GRIDS_rtindate',
				selector: 'GRIDS_rtindate',
				autoCreate: true
			}],
			init: function(){
				this.control({
					'GRID_rtindate > toolbar > button[action=export]': {
                                            click: this.exportTransaksi
                                        },
                                        'GRIDS_rtindate > toolbar > button[action=exportdetail]': {
                                            click: this.exportDetail
                                        },
                                        'GRID_rtindate > toolbar > textfield[itemId=searchData]': {
                                          specialkey: this.searchData
                                        },
                                        'FRM_rtindate button[itemId=searchfilter]': {
                                            click: this.filterasset
                                        },
                                        'GRID_rtindate': {
                                            itemclick: this.getData
                                        }
				});
			},
			filterasset: function (btn) {
                            var grid = this.getGRID_rtindate();
                            var store = grid.getStore();
                            var win = this.getFRM_rtindate();
                            var values = win.down('form').getValues();
                            
                            
                            store.remoteFilter = false;
                            store.clearFilter();
                            store.remoteFilter = true;
                            store.filter([{
                                    value   : values
                                } ]);
                        },getData: function(grid, record){
                            var grid = this.getGRIDS_rtindate();
                            var store = grid.getStore();
                                
                            Ext.Ajax.request({
                                url: base_url + 'Rtindate/getGrid',
                                params: {receipt_doc: record.data.receipt_doc},
                                method: 'POST',
                                fields: ['receipt_doc'],
                                success: function(transport){
                                    store.loadData(Ext.decode(transport.responseText));
                                }
                            });
                        }	
						
		});