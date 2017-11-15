Ext.define('Almindo.Ttandaterimain.controller.C_ttandaterimain',{
    extend: 'Ext.app.Controller',
    views: [
        'Almindo.Ttandaterimain.view.TAB_ttandaterimain',
        'Almindo.Ttandaterimain.view.FRM_ttandaterimain',
        'Almindo.Ttandaterimain.view.WIN_ttincustomer',
        'Almindo.Ttandaterimain.view.GRID_ttandaterimain_invoice',
        'Almindo.Ttandaterimain.view.GRID_ttandaterimain',
        
        
        'Almindo.Mcustomer.view.GRID_mcustomer'
        
    ],
    stores: [
    ],
    refs: [{
        ref: 'FRM_ttandaterimain',
        xtype: 'FRM_ttandaterimain',
        selector: 'FRM_ttandaterimain',
        autoCreate: true
    },{
        ref: 'WIN_ttincustomer',
        xtype: 'WIN_ttincustomer',
        selector: 'WIN_ttincustomer',
        autoCreate: true
    },{
        ref: 'GRID_ttandaterimain_invoice',
        xtype: 'GRID_ttandaterimain_invoice',
        selector: 'GRID_ttandaterimain_invoice',
        autoCreate: true
    },{
        ref: 'GRID_ttandaterimain',
        xtype: 'GRID_ttandaterimain',
        selector: 'GRID_ttandaterimain',
        autoCreate: true
    }],
    init: function(){
            this.control({
                    'FRM_ttandaterimain button[action=add_cust]': {
                        click: this.showCust
                    },
                    'FRM_ttandaterimain button[action=btn_document]': {
                        click: this.showDocument
                    },
                    'WIN_ttincustomer > GRID_mcustomer': {
                        itemdblclick: this.getCustomer
                    },
                    'GRID_ttandaterimain_invoice button[action=add_invoice]': {
                        click: this.add_invoice
                    },
                    'TAB_ttandateriman button[action=save_invoice]': {
                        click: this.save_invoice
                    },
                    'GRID_ttandaterimain > toolbar > textfield[itemId=searchData]': {
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
                } ]);
        }
    },
    showCust: function(){
        var win = this.getWIN_ttincustomer();
        win.show();
    },
    showDocument: function(){
        Ext.Ajax.request({
            url: base_url + 'Ttandaterimain/autoNum',
            method: 'POST',
            success: function(transport){
                Ext.getCmp('receipt_doc').setValue(transport.responseText);
            }
        }); 
    },
    getCustomer: function(me, record, item, index){
        var win = this.getWIN_ttincustomer();
        var form = this.getFRM_ttandaterimain();
        form.getForm().setValues(record.getData());
        win.close();
    },
    add_invoice: function(me, record, item, index){
        var grid = this.getGRID_ttandaterimain_invoice();
        grid.store.add({
            recdetail_invoice : '-',
            recdetail_delivery : '-',
            recdetail_po : '-',
            recdetail_date : '-',
            recdetail_price : 0,
        });

    }
});