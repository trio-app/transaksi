		Ext.define('Almindo.Mwarnaglasin.controller.C_mwarnaglasin',{
			extend: 'Ext.app.Controller',
			views: [
				'Almindo.Mwarnaglasin.view.GRID_mwarnaglasin',
				'Almindo.Mwarnaglasin.view.FRM_mwarnaglasin'
			],
			stores  : [
				//'Almindo.Mwarnaglasin.store.ST_mwarnaglasin'
			],
			refs: [{
				ref: 'FRM_mwarnaglasin',
				xtype: 'FRM_mwarnaglasin',
				selector: 'FRM_mwarnaglasin',
				autoCreate: true
			},{
				ref: 'GRID_mwarnaglasin',
				xtype: 'GRID_mwarnaglasin',
				selector: 'GRID_mwarnaglasin',
				autoCreate: true
			}],
			init: function(){
				this.control({
					'GRID_mwarnaglasin > toolbar > textfield[itemId=searchData]': {
						specialkey: this.searchData
					},										
					'GRID_mwarnaglasin' :{
						itemdblclick: this.onRowdblclick,
						removeitem: this.deleteItem
					},
					'FRM_mwarnaglasin button[action=add]':{
						click: this.doSaveform
					},
				});
			},
			searchData:function (f,e) {
				//var store = Ext.getStore('Almindo.Mwarnaglasin.store.ST_mwarnaglasin');//Ext.getStore('Almindo.Mwarnaglasin.store.ST_mwarnaglasin');//
				var grid = this.getGRID_mwarnaglasin();
                                var store = grid.getStore();
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
				var win = this.getFRM_mwarnaglasin();
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
				var win = this.getFRM_mwarnaglasin();
				var grid = this.getGRID_mwarnaglasin();
				var store = grid.getStore();//Ext.getStore('ScontactStore');
				Ext.Ajax.request({
					url: base_url + 'Mwarnaglasin/' +  inAction,
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
				var win = this.getFRM_mwarnaglasin();
				var store = Ext.getStore('Almindo.Mwarnaglasin.store.ST_mwarnaglasin');
				var form = win.down('form');
				var values = form.getValues();
				var record = form.getRecord();
				var action = win.getAction();
				var recValue = Ext.create('Almindo.Mwarnaglasin.model.M_mwarnaglasin', values);
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