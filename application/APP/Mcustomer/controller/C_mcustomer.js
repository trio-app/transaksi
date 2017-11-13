		Ext.define('Almindo.Mcustomer.controller.C_mcustomer',{
			extend: 'Ext.app.Controller',
			views: [
				'Almindo.Mcustomer.view.GRID_mcustomer',
				'Almindo.Mcustomer.view.FRM_mcustomer'
			],
			stores  : [
				//'Almindo.Mcustomer.store.ST_mcustomer'
			],
			refs: [{
				ref: 'FRM_mcustomer',
				xtype: 'FRM_mcustomer',
				selector: 'FRM_mcustomer',
				autoCreate: true
			},{
				ref: 'GRID_mcustomer',
				xtype: 'GRID_mcustomer',
				selector: 'GRID_mcustomer',
				autoCreate: true
			}],
			init: function(){
				this.control({
					'GRID_mcustomer > toolbar > textfield[itemId=searchData]': {
						specialkey: this.searchData
					},										
					'GRID_mcustomer' :{
						itemdblclick: this.onRowdblclick,
						removeitem: this.deleteItem
					},
					'FRM_mcustomer button[action=add]':{
						click: this.doSaveform
					},
				});
			},
			searchData:function (f,e) {
				var store = Ext.getStore('Almindo.Mcustomer.store.ST_mcustomer');//Ext.getStore('Almindo.Mcustomer.store.ST_mcustomer');//
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

			},
			onRowdblclick: function(me, record, item, index){							
				var win = this.getFRM_mcustomer();
				win.setAction('edit');
				win.setRecordIndex(index);
				win.down('form').getForm().setValues(record.getData());
							
				win.show();
			},
			deleteItem:function (record) {
				Ext.Msg.confirm('Delete Customer', 'Are you sure?', function (button) {
					if (button == 'yes') {
						this.doProsesCRUD('delete',record);
					}
				}, this);
			},
			doProsesCRUD : function (inAction,record){
				var win = this.getFRM_mcustomer();
				var grid = this.getGRID_mcustomer();
				var store = grid.getStore();//Ext.getStore('ScontactStore');
				Ext.Ajax.request({
					url: base_url + 'Mcustomer/' +  inAction,
					method: 'POST',
					type:'json',
					params: JSON.stringify(record.data),
					success: function(response){
						switch(inAction) {
							case 'delete':
									store.load();
									createAlert('Delete Customer', 'Delete Data Success', 'success');
								break;
							case 'create' :
									store.load();
									createAlert('Insert Customer', 'Insert Data Success', 'success');
								break;
							case 'update' :
									store.load();
									createAlert('Update Customer', 'Update Data Success', 'success');
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
				var win = this.getFRM_mcustomer();
				var store = Ext.getStore('Almindo.Mcustomer.store.ST_mcustomer');
				var form = win.down('form');
				var values = form.getValues();
				var record = form.getRecord();
				var action = win.getAction();
				var recValue = Ext.create('Almindo.Mcustomer.model.M_mcustomer', values);
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