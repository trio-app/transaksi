Ext.define('Almindo.Tpackinglist.view.TAB_tpackinglist',{
    extend: 'Ext.tab.Panel',
    alias: 'widget.TAB_tpackinglist',
    id: 'TAB_tpackinglist',
    activeTab: 0,
    tabBar: {
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
    defaults: { flex: 1 }
    },
    items: [{
        title: 'FORM INPUT PACKING LIST',
        layout: 'anchor',
        items: [{
            xtype: 'FRM_tpackinglist'
        },{
            xtype: 'GRID_tpackinglist_mat',
        }]
    }, {
        title: 'LIST DATA PACKING LIST',
        layout: 'anchor',
    }]
})