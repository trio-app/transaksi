Etx.define('Almindo.RBydate.controller.C_rbaydate',{
	extend : 'Ext.app.Controller',
	views: ['Almindo.RBydate.view.FRM_rbydate',
			'Almindo.RBydate.view.GRID_rbdyate'
		],
	store : [
				//'Almindo.RBydate.store.ST_rbydate'
		],
	refs: [{
				ref: 'FRM_rbydate',
				xtype: 'FRM_rbydate',
				selector: 'FRM_rbydate',
				autoCreate: true
			},{
				ref: 'GRID_rbydate',
				xtype: 'GRID_rbydate',
				selector: 'GRID_rbydate',
				autoCreate: true
	}],
		init: function(){

		},
})