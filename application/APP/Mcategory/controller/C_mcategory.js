		Ext.define('Almindo.Mcategory.controller.C_mcategory',{
			extend: 'Ext.app.Controller',
			views: [
				'Almindo.Mcategory.view.GRID_mcategory',
				'Almindo.Mcategory.view.FRM_mcategory'
			],
			stores  : [
				//'Almindo.Mcategory.store.ST_mcategory'
			],
			refs: [{
				ref: 'FRM_mcategory',
				xtype: 'FRM_mcategory',
				selector: 'FRM_mcategory',
				autoCreate: true
			},{
				ref: 'GRID_mcategory',
				xtype: 'GRID_mcategory',
				selector: 'GRID_mcategory',
				autoCreate: true
			}],
			init: function(){
				this.control({
					'GRID_mcategory > toolbar > textfield[itemId=searchData]': {
						specialkey: this.searchData
					},										
					'GRID_mcategory' :{
						itemdblclick: this.onRowdblclick,
						removeitem: this.deleteItem
					},
					'FRM_mcategory button[action=add]':{
						click: this.doSaveform
					},
				});
			},
			searchData:function (f,e) {
				//var store = Ext.getStore('Almindo.Mcategory.store.ST_mcategory');//Ext.getStore('Almindo.Mcategory.store.ST_mcategory');//
				var grid = this.getGRID_mcategory();
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
				var win = this.getFRM_mcategory();
				win.setAction('edit');
				win.setRecordIndex(index);
				win.down('form').getForm().setValues(record.getData());
							
				win.show();
			},
			deleteItem:function (record) {
				Ext.Msg.confirm('Delete category', 'Are you sure?', function (button) {
					if (button == 'yes') {
						this.doProsesCRUD('delete',record);
					}
				}, this);
			},
			doProsesCRUD : function (inAction,record){
				var win = this.getFRM_mcategory();
				var grid = this.getGRID_mcategory();
				var store = grid.getStore();//Ext.getStore('ScontactStore');
				Ext.Ajax.request({
					url: base_url + 'Mcategory/' +  inAction,
					method: 'POST',
					type:'json',
					params: JSON.stringify(record.data),
					success: function(response){
						switch(inAction) {
							case 'delete':
									store.load();
									createAlert('Delete category', 'Delete Data Success', 'success');
								break;
							case 'create' :
									store.load();
									createAlert('Insert category', 'Insert Data Success', 'success');
								break;
							case 'update' :
									store.load();
									createAlert('Update category', 'Update Data Success', 'success');
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
				var win = this.getFRM_mcategory();
				var store = Ext.getStore('Almindo.Mcategory.store.ST_mcategory');
				var form = win.down('form');
				var values = form.getValues();
				var record = form.getRecord();
				var action = win.getAction();
				var recValue = Ext.create('Almindo.Mcategory.model.M_mcategory', values);
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