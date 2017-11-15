Ext.define('Almindo.Tpackinglist.controller.C_tpackinglist',{
    extend: 'Ext.app.Controller',
    views: [
        'Almindo.Tpackinglist.view.TAB_tpackinglist',
        'Almindo.Tpackinglist.view.FRM_tpackinglist',
        'Almindo.Tpackinglist.view.GRID_tpackinglist_mat',
        'Almindo.Tpackinglist.view.WIN_tpcustomer',
        'Almindo.Tpackinglist.view.WIN_tpitem',
        
        
        'Almindo.Mcustomer.view.GRID_mcustomer',
        'Almindo.Mitem.view.GRID_mitem'
    ],
    stores: [
    ],
    refs: [{
        ref: 'FRM_tpackinglist',
        xtype: 'FRM_tpackinglist',
        selector: 'FRM_tpackinglist',
        autoCreate: true
    },{
        ref: 'WIN_tpcustomer',
        xtype: 'WIN_tpcustomer',
        selector: 'WIN_tpcustomer',
        autoCreate: true
    },{
        ref: 'WIN_tpitem',
        xtype: 'WIN_tpitem',
        selector: 'WIN_tpitem',
        autoCreate: true
    }],
    init: function(){
            this.control({
                    'FRM_tpackinglist button[action=add_cust]': {
                        click: this.showCust
                    },
                    'FRM_tpackinglist button[action=btn_document]': {
                        click: this.showDocument
                    },
                    'WIN_tpcustomer > GRID_mcustomer': {
                        itemdblclick: this.getCustomer
                    },
                    'GRID_tpackinglist_mat button[action=add_material]': {
                        click: this.showMaterial
                    },
                    
            });
    },
    showCust: function(){
        var win = this.getWIN_tpcustomer();
        win.show();
    },
    showDocument: function(){
        Ext.Ajax.request({
            url: base_url + 'Tpackinglist/autoNum',
            method: 'POST',
            success: function(transport){
                Ext.getCmp('transaksi_doc').setValue(transport.responseText);
            }
        }); 
    },
    getCustomer: function(me, record, item, index){
        var win = this.getWIN_tpcustomer();
        var form = this.getFRM_tpackinglist();
        form.getForm().setValues(record.getData());
        win.close();
    },
    showMaterial: function(){
        var win = this.getWIN_tpitem();
        win.show();
    },
});