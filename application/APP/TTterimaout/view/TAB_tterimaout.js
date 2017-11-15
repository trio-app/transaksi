Ext.define('Almindo.TTterimaout.view.TAB_tterimaout'{
 extend: 'Ext.tab.Panel',
    alias: 'widget.TAB_tterimaout',
    id: 'TAB_tterimaout',
    activeTab: 0,
    tabBar: {
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
    defaults: { flex: 1 }
    },
    items: [{
        title: 'FORM INPUT TANDA TERIMA OUT',
        layout: 'anchor',
        items: [{
            xtype: 'FRM_tterimaout'
        },/*{
            xtype: 'GRID_ttandaterimain_invoice'
        }*/]
    }, {
        title: 'LIST DATA TANDA TERIMA OUT',
        layout: 'anchor',
    }]
})