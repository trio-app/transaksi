	Ext.define('Almindo.TTterimaout.controller.C_tterimaout',{
		extend:'Ext.app.Controller',
		views:[ 'Almindo.TTterimaout.view.FRM_tterimaout',
				'Almindo.TTterimaout.view.TAB_tterimaout',
				/*'Almindo.TTterimaout.view.',
				'Almindo.TTterimaout.view.',
				'Almindo.TTterimaout.view.',*/

		],	
		stores:[
		],
		refs:[{
			ref:'FRM_tterimaout',
			xtype:'FRM_tterimaout',
			selector:'FRM_tterimaout',
			autoCreate: true
		}/*,{
			ref:'',
			xtype:'',
			selector:'',
			autoCreate: true
		}*/]
	});