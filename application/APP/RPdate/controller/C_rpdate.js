Etx.define('Almindo.RPdate.controller.C_rpdate',{
	extend : 'Ext.app.Controller',
	views: ['Almindo.RPdate.view.FRM_rpdate',
			'Almindo.RPdate.view.GRID_rbdyate'
		],
	store : [
				//'Almindo.RPdate.store.ST_rpdate'
		],
	refs: [{
				ref: 'FRM_rpdate',
				xtype: 'FRM_rpdate',
				selector: 'FRM_rpdate',
				autoCreate: true
			},{
				ref: 'GRID_rpdate',
				xtype: 'GRID_rpdate',
				selector: 'GRID_rpdate',
				autoCreate: true
	}],
		init: function(){

		},
})