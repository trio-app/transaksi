		Ext.define('Almindo.Mitem.controller.C_mitem',{
			extend: 'Ext.app.Controller',
			views: [
				'Almindo.Mitem.view.GRID_mitem',
				'Almindo.Mitem.view.FRM_mitem'
			],
			stores  : [
				//'Almindo.Mitem.store.ST_mitem'
			],
			refs: [{
				ref: 'FRM_mitem',
				xtype: 'FRM_mitem',
				selector: 'FRM_mitem',
				autoCreate: true
			},{
				ref: 'GRID_mitem',
				xtype: 'GRID_mitem',
				selector: 'GRID_mitem',
				autoCreate: true
			}],
			init: function(){
				this.control({
					'GRID_mitem > toolbar > textfield[itemId=searchData]': {
						specialkey: this.searchData
					},										
					'GRID_mitem' :{
						itemdblclick: this.onRowdblclick,
						removeitem: this.deleteItem
					},
					'FRM_mitem button[action=add]':{
						click: this.doSaveform
					},
				});
			},
			searchData:function (f,e) {
				var store = Ext.getStore('Almindo.Mitem.store.ST_mitem');//Ext.getStore('Almindo.Mitem.store.ST_mitem');//
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
				var win = this.getFRM_mitem();
				win.setAction('edit');
				win.setRecordIndex(index);
				win.down('form').getForm().setValues(record.getData());
							
				win.show();
			},
			deleteItem:function (record) {
				Ext.Msg.confirm('Delete item', 'Are you sure?', function (button) {
					if (button == 'yes') {
						this.doProsesCRUD('delete',record);
					}
				}, this);
			},
			doProsesCRUD : function (inAction,record){
				var win = this.getFRM_mitem();
				var grid = this.getGRID_mitem();
				var store = grid.getStore();//Ext.getStore('ScontactStore');
				Ext.Ajax.request({
					url: base_url + 'Mitem/' +  inAction,
					method: 'POST',
					type:'json',
					params: JSON.stringify(record.data),
					success: function(response){
						switch(inAction) {
							case 'delete':
									store.load();
									createAlert('Delete item', 'Delete Data Success', 'success');
								break;
							case 'create' :
									store.load();
									createAlert('Insert item', 'Insert Data Success', 'success');
								break;
							case 'update' :
									store.load();
									createAlert('Update item', 'Update Data Success', 'success');
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
				var win = this.getFRM_mitem();
				var store = Ext.getStore('Almindo.Mitem.store.ST_mitem');
				var form = win.down('form');
				var values = form.getValues();
				var record = form.getRecord();
				var action = win.getAction();
				var recValue = Ext.create('Almindo.Mitem.model.M_mitem', values);
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