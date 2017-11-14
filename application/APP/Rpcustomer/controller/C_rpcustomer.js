		Ext.define('Almindo.Rpcustomer.controller.C_rpcustomer',{
			extend: 'Ext.app.Controller',
			views: [
				'Almindo.Rpcustomer.view.GRID_rpcustomer',
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
                            var win = this.getFRM_rpcustomer();
                            var values = win.down('form').getValues();
                            var store = Ext.getStore('Almindo.Rpcustomer.store.ST_rpcustomer');
                            
                            store.remoteFilter = false;
                            store.clearFilter();
                            store.remoteFilter = true;
                            store.filter([{
                                    value   : values
                                } ]);
                        },
			onRowdblclick: function(me, record, item, index){							
				var win = this.getFRM_rpcustomer();
				win.setAction('edit');
				win.setRecordIndex(index);
				win.down('form').getForm().setValues(record.getData());
							
				win.show();
			},
			deleteItem:function (record) {
				Ext.Msg.confirm('Delete Warna Glasin', 'Are you sure?', function (button) {
					if (button == 'yes') {
						this.doProsesCRUD('delete',record);
					}
				}, this);
			},
			doProsesCRUD : function (inAction,record){
				var win = this.getFRM_rpcustomer();
				var grid = this.getGRID_rpcustomer();
				var store = grid.getStore();//Ext.getStore('ScontactStore');
				Ext.Ajax.request({
					url: base_url + 'Rpcustomer/' +  inAction,
					method: 'POST',
					type:'json',
					params: JSON.stringify(record.data),
					success: function(response){
						switch(inAction) {
							case 'delete':
									store.load();
									createAlert('Delete Warna Glasin', 'Delete Data Success', 'success');
								break;
							case 'create' :
									store.load();
									createAlert('Insert Warna Glasin', 'Insert Data Success', 'success');
								break;
							case 'update' :
									store.load();
									createAlert('Update Warna Glasin', 'Update Data Success', 'success');
								break;
						}
                            win.down('form').getForm().reset();
                            win.setAction('add');

					},
					failure: function(response){
						Ext.Msg.alert('server-side failure with status code ' + response.status  , response.responseText);

					}
				});
			},						
			doSaveform: function(){
				var win = this.getFRM_rpcustomer();
				var store = Ext.getStore('Almindo.Rpcustomer.store.ST_rpcustomer');
				var form = win.down('form');
				var values = form.getValues();
				var record = form.getRecord();
				var action = win.getAction();
				var recValue = Ext.create('Almindo.Rpcustomer.model.M_rpcustomer', values);
				console.log(action);
								
				if(action == 'edit'){
					if(form.isValid()){
						this.doProsesCRUD('update',recValue);
					}
				}else{
					if(form.isValid()){
						this.doProsesCRUD('create',recValue);
					}
				}
			}			
		});