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
        title: 'FORM INPUT TANDA TERIMA IN',
        layout: 'anchor',
        items: [{
            xtype: 'FRM_ttandaterimain'
        },{
            xtype: 'GRID_ttandaterimain_invoice'
        }],
        buttons: [{
            text: 'Save',
            action: 'save_invoce'
        },{
            text: 'Reset',
            handler: function(){
                var frm = Ext.getCmp('FRM_ttandaterimain');
                frm.getForm().reset(); 
            }
        }]
    }, {
        title: 'LIST DATA TANDA TERIMA IN',
        layoust: 'anchor',
        items: [{
            xtype: 'GRID_ttandaterimain',
            store: Ext.create('Almindo.Ttandaterimain.store.ST_ttandaterimain')
        }]
    }]
});