	Ext.define('Almindo.TTterimaout.controller.C_tterimaout',{
		extend:'Ext.app.Controller',
		views:[ 'Almindo.TTterimaout.view.FRM_tterimaout',
				'Almindo.TTterimaout.view.TAB_tterimaout',
				/*'Almindo.TTterimaout.view.GRID_tterimaout_inv',*/
				'Almindo.TTterimaout.view.WIN_tterimaitem',
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
			ref:'WIN_tterimaitem',
			xtype:'WIN_tterimaitem',
			selector:'WIN_tterimaitem',
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
		}]
	});