Ext.define('Almindo.Tpackinglist.controller.C_tpackinglist',{
    extend: 'Ext.app.Controller',
    views: [
        'Almindo.Tpackinglist.view.TAB_tpackinglist',
        'Almindo.Tpackinglist.view.FRM_tpackinglist',
        'Almindo.Tpackinglist.view.GRID_tpackinglist',
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
    },{
        ref: 'GRID_tpackinglist_mat',
        xtype: 'GRID_tpackinglist_mat',
        selector: 'GRID_tpackinglist_mat',
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
                    'WIN_tpitem > GRID_mitem': {
                        itemdblclick: this.addMaterial
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
    addMaterial: function(me, record, item, index){
        var grid = this.getGRID_tpackinglist_mat();
        var win = this.getWIN_tpitem();
        var recordIndex = grid.store.findBy(function(data, id){
           //console.log(data.get('mat_sapcode')); 
        if(record.data.item_id == data.get('trdetailitem_id')){
            return true;
        }
           return false;
        });
        if(recordIndex != -1){
            Ext.MessageBox.confirm('Confirmation', 'Material / Item sudah Ada. Ingin menambahkan kembali ?', function(btn){
               if(btn == 'yes'){
                    grid.store.add({
                       trdetailitem_id : record.data.item_id,
                       trdetail_sjap :'-',
                       trdetail_item : record.data.item_kode + ' - ' + record.data.item_nama,
                       trdetail_po : '-',
                       trdetail_date : Ext.Date.format(new Date(), 'Y-m-d'),
                       trdetail_qty : 1,
                       trdetail_unit: record.data.item_unit,
                       trdetail_price: record.data.item_harga,
                       trdetail_amount: '',
                       trdetail_weight: record.data.item_weight,
                       trdetail_weighttotal: '',
                       trdetail_upp: record.data.item_upp,
                       trdetail_pack: ''
                   });
                win.close();
               }
            });
        }else{
            grid.store.add({
               trdetailitem_id : record.data.item_id,
               trdetail_sjap :'-',
               trdetail_item : record.data.item_kode + ' - ' + record.data.item_nama,
               trdetail_po : '-',
               trdetail_date : Ext.Date.format(new Date(), 'Y-m-d'),
               trdetail_qty : 1,
               trdetail_unit: record.data.item_unit,
               trdetail_price: record.data.item_harga,
               trdetail_amount: '',
               trdetail_weight: record.data.item_weight,
               trdetail_weighttotal: '',
               trdetail_upp: record.data.item_upp,
               trdetail_pack: ''
           });
           win.close();
        }

    }
});