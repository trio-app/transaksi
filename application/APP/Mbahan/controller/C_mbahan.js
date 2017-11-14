		Ext.define('Almindo.Mbahan.controller.C_mbahan',{
			extend: 'Ext.app.Controller',
			views: [
				'Almindo.Mbahan.view.GRID_mbahan',
				'Almindo.Mbahan.view.FRM_mbahan',
				//'Almindo.Mbahan.view.FRM_upload'
			],
			stores  : [
				//'Almindo.Mbahan.store.ST_mbahan'
			],
			refs: [{
				ref: 'FRM_mbahan',
				xtype: 'FRM_mbahan',
				selector: 'FRM_mbahan',
				autoCreate: true
			},{
				ref: 'GRID_mbahan',
				xtype: 'GRID_mbahan',
				selector: 'GRID_mbahan',
				autoCreate: true
                        },{
				ref: 'FRM_upload',
				xtype: 'FRM_upload',
				selector: 'FRM_upload',
				autoCreate: true
			}],
			init: function(){
				this.control({
					'GRID_mbahan > toolbar > textfield[itemId=searchData]': {
						specialkey: this.searchData
					},										
					'GRID_mbahan' :{
						itemdblclick: this.onRowdblclick,
						removeitem: this.deleteItem,
						add_img: this.add_img
					},
					'FRM_mbahan button[action=add]':{
						click: this.doSaveform
					},
				});
			},
			searchData:function (f,e) {
				var store = Ext.getStore('Almindo.Mbahan.store.ST_mbahan');//Ext.getStore('Almindo.Mbahan.store.ST_mbahan');//
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
                        add_img: function(record){
                            var upload = new Ext.create('Ext.window.Window', {
                                                        title: 'Upload File Gambar',
                                                        width: 450,
                                                        //height: 400,
                                                        modal   : true,
                                                        autoScroll: true,
                                                        closeAction: 'hide',
                                                        defaults: {
                                                            margin: '10',
                                                        },
                                                        items: [{
                                                            xtype: 'form',
                                                            layout: 'anchor',
                                                            bodyStyle: 'background:none;',
                                                            border: 0,
                                                            defaults: {
                                                                anchor: '100%'
                                                            },
                                                            items: [{
                                                                xtype: 'textfield',
                                                                name: 'bahan_id',
                                                                fieldLabel: 'ID ',
                                                                readOnly: true,
                                                                name: 'bahan_id',
                                                                value: record.data.bahan_id
                                                            },{
                                                                xtype: 'textfield',
                                                                fieldLabel: 'File Name ',
                                                                readOnly: true,
                                                                name: 'bahan_gambar',
                                                                value: record.data.bahan_gambar,
                                                            },{
                                                                xtype: 'filefield',
                                                                name: 'file',
                                                                fieldLabel: 'Upload Baru',
                                                                allowBlank: false
                                                            },{ 
                                                                xtype: 'image',
                                                                src : base_url +'system/img/upload/'+ record.data.bahan_gambar,
                                                            }]
                                                        }],
                                                        buttons: [{
                                                            text: 'Save',
                                                                handler: function(){
                                                                    var win = this.up('window');
                                                                    var form = win.down('form').getForm();
                                                                    
                                                                    var grid = Ext.getCmp('GRID_mbahan');
                                                                    //console.log(form.getValues());
                                                                    if(form.isValid()){
                                                                        form.submit({
                                                                            //method: 'POST',
                                                                            url: base_url + 'Mbahan/upload',
                                                                            waitMsg: 'Uploading your Picture...',
                                                                            success: function(fp, o) {
                                                                                Ext.MessageBox.alert('Status', o.result.msg);
                                                                                
                                                                                grid.getStore().reload();
                                                                                win.close();
                                                                            }
                                                                        });
                                                                    }
                                                                }
                                                        },{
                                                            text: 'Cancel',
                                                            handler: function () { 
                                                                this.up('window').close();
                                                            }
                                                        }]
                                                    });
                              upload.show();         
                        },
			onRowdblclick: function(me, record, item, index){							
				var win = this.getFRM_mbahan();
				win.setAction('edit');
				win.setRecordIndex(index);
				win.down('form').getForm().setValues(record.getData());
			},
			deleteItem:function (record) {
				Ext.Msg.confirm('Delete bahan', 'Are you sure?', function (button) {
					if (button == 'yes') {
						this.doProsesCRUD('delete',record);
					}
				}, this);
			},
			doProsesCRUD : function (inAction,record){
				var win = this.getFRM_mbahan();
				var grid = this.getGRID_mbahan();
				var store = grid.getStore();//Ext.getStore('ScontactStore');
				Ext.Ajax.request({
					url: base_url + 'Mbahan/' +  inAction,
					method: 'POST',
					type:'json',
					params: JSON.stringify(record.data),
					success: function(response){
						switch(inAction) {
							case 'delete':
									store.load();
									createAlert('Delete bahan', 'Delete Data Success', 'success');
								break;
							case 'create' :
									store.load();
									createAlert('Insert bahan', 'Insert Data Success', 'success');
								break;
							case 'update' :
									store.load();
									createAlert('Update bahan', 'Update Data Success', 'success');
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
				var win = this.getFRM_mbahan();
				var store = Ext.getStore('Almindo.Mbahan.store.ST_mbahan');
				var form = win.down('form');
				var values = form.getValues();
				var record = form.getRecord();
				var action = win.getAction();
				var recValue = Ext.create('Almindo.Mbahan.model.M_mbahan', values);
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