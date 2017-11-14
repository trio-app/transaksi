		Ext.define('Almindo.Mmerk.controller.C_mmerk',{
			extend: 'Ext.app.Controller',
			views : [
				'Almindo.Mmerk.view.FRM_mmerk',
				'Almindo.Mmerk.view.GRID_mmerk'	
			],
			stores : [ //'Almindo.Mmerk.store.ST_mmerk'
			],
			refs : [{
				 ref: 'FRM_mmerk',
				 xtype:'FRM_mmerk',
				 selector: 'FRM_mmerk',
				 autoCreate: true
			},{
				ref: 'FRM_mmerk',
				xtype: 'FRM_mmerk',
				selector: 'FRM_mmerk',
				autoCreate: true
			}],
			init: function(){
				this.control({
					'GRID_mmerk > toolbar > textfield[itemId=searchData]': {
						specialkey: this.searchData
					},										
					'GRID_mmerk' :{
						itemdblclick: this.onRowdblclick,
						removeitem: this.deleteItem
					},
					'FRM_mmerk button[action=add]':{
						click: this.doSaveform
					},
				});
			},
			searchData:function (f,e) {
				var store = Ext.getStore('Almindo.Mmerk.store.ST_mmerk');//Ext.getStore('Almindo.Mmerk.store.ST_mmerk');//
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
				var win = this.getFRM_mmerk();
				win.setAction('edit');
				win.setRecordIndex(index);
				win.down('form').getForm().setValues(record.getData());
							
				win.show();
			},
			deleteItem:function (record) {
				Ext.Msg.confirm('Delete Jenis Bahan', 'Are you sure?', function (button) {
					if (button == 'yes') {
						this.doProsesCRUD('delete',record);
					}
				}, this);
			},
			doProsesCRUD : function (inAction,record){
				var win = this.getFRM_mmerk();
				var grid = this.getGRID_mmerk();
				var store = grid.getStore();//Ext.getStore('ScontactStore');
				Ext.Ajax.request({
					url: base_url + 'MMerk/' +  inAction,
					method: 'POST',
					type:'json',
					params: JSON.stringify(record.data),
					success: function(response){
						switch(inAction) {
							case 'delete':
									store.load();
									createAlert('Delete Jenis Bahan', 'Delete Data Success', 'success');
								break;
							case 'create' :
									store.load();
									createAlert('Insert Jenis Bahan', 'Insert Data Success', 'success');
								break;
							case 'update' :
									store.load();
									createAlert('Update Jenis Bahan', 'Update Data Success', 'success');
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
				var win = this.getFRM_mmerk();
				var store = Ext.getStore('Almindo.Mmerk.store.ST_mmerk');
				var form = win.down('form');
				var values = form.getValues();
				var record = form.getRecord();
				var action = win.getAction();
				var recValue = Ext.create('Almindo.Mmerk.model.M_mmerk', values);
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