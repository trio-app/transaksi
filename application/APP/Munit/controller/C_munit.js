		Ext.define('Almindo.Munit.controller.C_munit',{
			extend: 'Ext.app.Controller',
			views: [
				'Almindo.Munit.view.GRID_munit',
				'Almindo.Munit.view.FRM_munit'
			],
			stores  : [
				//'Almindo.Munit.store.ST_munit'
			],
			refs: [{
				ref: 'FRM_munit',
				xtype: 'FRM_munit',
				selector: 'FRM_munit',
				autoCreate: true
			},{
				ref: 'GRID_munit',
				xtype: 'GRID_munit',
				selector: 'GRID_munit',
				autoCreate: true
			}],
			init: function(){
				this.control({
					'GRID_munit > toolbar > textfield[itemId=searchData]': {
						specialkey: this.searchData
					},										
					'GRID_munit' :{
						itemdblclick: this.onRowdblclick,
						removeitem: this.deleteItem
					},
					'FRM_munit button[action=add]':{
						click: this.doSaveform
					},
				});
			},
			searchData:function (f,e) {
				var store = Ext.getStore('Almindo.Munit.store.ST_munit');//Ext.getStore('Almindo.Munit.store.ST_munit');//
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
				var win = this.getFRM_munit();
				win.setAction('edit');
				win.setRecordIndex(index);
				win.down('form').getForm().setValues(record.getData());
							
				win.show();
			},
			deleteItem:function (record) {
				Ext.Msg.confirm('Delete unit', 'Are you sure?', function (button) {
					if (button == 'yes') {
						this.doProsesCRUD('delete',record);
					}
				}, this);
			},
			doProsesCRUD : function (inAction,record){
				var win = this.getFRM_munit();
				var grid = this.getGRID_munit();
				var store = grid.getStore();//Ext.getStore('ScontactStore');
				Ext.Ajax.request({
					url: base_url + 'Munit/' +  inAction,
					method: 'POST',
					type:'json',
					params: JSON.stringify(record.data),
					success: function(response){
						switch(inAction) {
							case 'delete':
									store.load();
									createAlert('Delete unit', 'Delete Data Success', 'success');
								break;
							case 'create' :
									store.load();
									createAlert('Insert unit', 'Insert Data Success', 'success');
								break;
							case 'update' :
									store.load();
									createAlert('Update unit', 'Update Data Success', 'success');
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
				var win = this.getFRM_munit();
				var store = Ext.getStore('Almindo.Munit.store.ST_munit');
				var form = win.down('form');
				var values = form.getValues();
				var record = form.getRecord();
				var action = win.getAction();
				var recValue = Ext.create('Almindo.Munit.model.M_munit', values);
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