	Ext.define('Almindo.TTterimaout.controller.C_tterimaout',{
		extend:'Ext.app.Controller',
		views:[ 'Almindo.TTterimaout.view.FRM_tterimaout',
				'Almindo.TTterimaout.view.TAB_tterimaout',
				'Almindo.TTterimaout.view.GRID_tterimaout_inv',
				//'Almindo.TTterimaout.view.WIN_tterimaitem',
				'Almindo.TTterimaout.view.WIN_tterimacust',
				//'Almindo.TTterimaout.view.GRID_tterimaout',
		],	
		stores:[
		],

		refs:[{
				ref:'FRM_tterimaout',
				xtype:'FRM_tterimaout',
				selector:'FRM_tterimaout',
				autoCreate: true
			},{
				ref:'GRID_tterimaout',
				xtype:'GRID_tterimaout',
				selector:'GRID_tterimaout',
				autoCreate: true
			},{
				ref:'WIN_tterimacust',
				xtype:'WIN_tterimacust',
				selector:'WIN_tterimacust',
				autoCreate: true
			},{
				ref:'GRID_tterimaout_inv',
				xtype:'GRID_tterimaout_inv',
				selector:'GRID_tterimaout_inv',
				autoCreate: true
			}],
		init: function(){
            this.control({
                    'FRM_tterimaout button[action=add_cust]': {
                        click: this.showCust
                    },
                    'FRM_tterimaout button[action=btn_document]': {
                        click: this.showDocument
                    },
                    'WIN_tterimacust > GRID_mcustomer': {
                        itemdblclick: this.getCustomer
                    },
                    'GRID_tterimaout_inv button[action=add_invoice]': {
                        click: this.add_invoice
                    },
                    'TAB_tterimaout button[action=save_invoice]': {
                        click: this.save_invoice
                    },
                    'GRID_tterimaout > toolbar > textfield[itemId=searchData]': {
                        specialkey: this.searchData
                    }
                    
            });
   		 },
   		 searchData:function (f,e) {
                            var grid = this.getGRID_ttandaterimain();
        					var store = grid.getStore();
        						if (e.getKey() == e.ENTER) {

	                                store.remoteFilter = false;
	                                store.clearFilter();
	                                store.remoteFilter = true;
	                                store.filter([{
	                                        property:'filtername',
	                                        anyMatch: true,
	                                        value   : f.value
	                                   }]);
	                          }
	     		
	     },


         
    });