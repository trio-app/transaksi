Ext.define('Almindo.Ttandaterimain.view.TAB_ttandaterimain',{
    extend: 'Ext.tab.Panel',
    alias: 'widget.TAB_ttandaterimain',
    id: 'TAB_ttandaterimain',
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
            xtype: 'FRM_ttandaterimain'
        },{
            xtype: 'GRID_ttandaterimain_invoice'
        }],
        buttons: [{
            text: 'Save'
        },{
            text: 'Reset',
            handler: function(){
                var frm = Ext.getCmp('FRM_ttandaterimain');
                frm.getForm().reset(); 
            }
        }]
    }, {
        title: 'LIST DATA PACKING LIST',
        layoust: 'anchor'
    }]
});