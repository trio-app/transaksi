Ext.define('Almindo.TTerimaout.view.TAB_terimaout',{
	extend: 'Ext.tab.Panel',
	alias: 'widget.TAB_terimaout',
	id: 'TAB_terimaout'
	acviteTab: 0,
	tabBar: {
		layout: {
			type: 'hbox',
			align: 'stretch'
		},
	default: { flex: 1}
	},
	items: [{
		title: 'FORM INPUT TANDA TERIMA OUT',
		layout: 'anchor',
		items: [{
			xtype: 'FRM_terimaout',
		},{
			xtype: ''
		}]
	},{
		title: 'LIST DATA TANDA TERIMA OUT',
        layout: 'anchor',
	}]
});