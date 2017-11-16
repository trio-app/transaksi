		Ext.define('Almindo.MJBahan.controller.C_mjbahan',{
			extend: 'Ext.app.Controller',
			views: [
				'Almindo.MJBahan.view.GRID_mjbahan',
				'Almindo.MJBahan.view.FRM_mjbahan'
			],
			stores  : [
				//'Almindo.MJBahan.store.ST_mjbahan'
			],
			refs: [{
				ref: 'FRM_mjbahan',
				xtype: 'FRM_mjbahan',
				selector: 'FRM_mjbahan',
				autoCreate: true
			},{
				ref: 'GRID_mjbahan',
				xtype: 'GRID_mjbahan',
				selector: 'GRID_mjbahan',
				autoCreate: true
			}],
			init: function(){
				this.control({
					'GRID_mjbahan > toolbar > textfield[itemId=searchData]': {
						specialkey: this.searchData
					},										
					'GRID_mjbahan' :{
						itemdblclick: this.onRowdblclick,
						removeitem: this.deleteItem
					},
					'FRM_mjbahan button[action=add]':{
						click: this.doSaveform
					},
				});
			},
			searchData:function (f,e) {
				//var store = Ext.getStore('Almindo.MJBahan.store.ST_mjbahan');//Ext.getStore('Almindo.MJBahan.store.ST_mjbahan');//
				var grid = this.getGRID_mjbahan();
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
				var win = this.getFRM_mjbahan();
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
				var win = this.getFRM_mjbahan();
				var grid = this.getGRID_mjbahan();
				var store = grid.getStore();//Ext.getStore('ScontactStore');
				Ext.Ajax.request({
					url: base_url + 'MJBahan/' +  inAction,
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
				var win = this.getFRM_mjbahan();
				var store = Ext.getStore('Almindo.MJBahan.store.ST_mjbahan');
				var form = win.down('form');
				var values = form.getValues();
				var record = form.getRecord();
				var action = win.getAction();
				var recValue = Ext.create('Almindo.MJBahan.model.M_mjbahan', values);
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