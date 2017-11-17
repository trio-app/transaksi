Ext.define('Almindo.Tspkerja.controller.C_tspkerja',{
    extend: 'Ext.app.Controller',
    views: [
        'Almindo.Tspkerja.view.TAB_tspkerja',
        'Almindo.Tspkerja.view.FRM_tspkerja',
        'Almindo.Tspkerja.view.GRID_tspkerja',
        'Almindo.Tspkerja.view.WIN_tspkcustomer',
        'Almindo.Tspkerja.view.WIN_tspkbahan',
        
        
        'Almindo.Mcustomer.view.GRID_mcustomer',
        'Almindo.Mbahan.view.GRID_mbahan'
        
    ],
    stores: [
    ],
    refs: [{
        ref: 'FRM_tspkerja',
        xtype: 'FRM_tspkerja',
        selector: 'FRM_tspkerja',
        autoCreate: true
    },{
        ref: 'WIN_tspkerja',
        xtype: 'WIN_tspkerja',
        selector: 'WIN_tspkerja',
        autoCreate: true
    },{
        ref: 'GRID_tspkerja',
        xtype: 'GRID_tspkerja',
        selector: 'GRID_tspkerja',
        autoCreate: true
    },{
        ref: 'WIN_tspkcustomer',
        xtype: 'WIN_tspkcustomer',
        selector: 'WIN_tspkcustomer',
        autoCreate: true 
    },{
        ref: 'WIN_tspkbahan',
        xtype: 'WIN_tspkbahan',
        selector: 'WIN_tspkbahan',
        autoCreate: true 
    }],
    init: function(){
            this.control({
                    'FRM_tspkerja button[action=add_cust]': {
                        click: this.showCust
                    },
                    'FRM_tspkerja button[action=add_bahan]': {
                        click: this.showBahan
                    },
                    'FRM_tspkerja button[action=btn_document]': {
                        click: this.showDocument
                    },
                    'WIN_tspkcustomer > GRID_mcustomer': {
                        itemdblclick: this.getCustomer
                    },
                    'WIN_tspkbahan > GRID_mbahan': {
                        itemdblclick: this.getBahan
                    },
                    'GRID_ttandaterimain_invoice button[action=add_invoice]': {
                        click: this.add_invoice
                    },
                    'TAB_tspkerja button[action=save_spk]': {
                        click: this.doSaveform
                    },
                    'TAB_ttandaterimain GRID_ttandaterimain': {
                        itemdblclick: this.onRowdblclick,
                        removeitem: this.deleteItem,
                        print_file: this.print_file
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
        var win = this.getWIN_tspkcustomer();
        win.show();
    },
    showBahan: function(){
        var win = this.getWIN_tspkbahan();
        win.show();
    },
    showDocument: function(){
        Ext.Ajax.request({
            url: base_url + 'Tspkerja/autoNum',
            method: 'POST',
            success: function(transport){
                Ext.getCmp('spk_doc').setValue(transport.responseText);
            }
        }); 
    },
    getCustomer: function(me, record, item, index){
        var win = this.getWIN_tspkcustomer();
        var form = this.getFRM_tspkerja();
        form.getForm().setValues(record.getData());
        win.close();
    },
    getBahan: function(me, record, item, index){
        var win = this.getWIN_tspkbahan();
        var form = this.getFRM_tspkerja();
        form.getForm().setValues(record.getData());
        Ext.getCmp('bahan_jenis2').setValue(record.data.bahan_jenis);
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

    },
    doSaveform: function(){
        var win = this.getFRM_tspkerja();
        var store = Ext.getStore('Almindo.Tspkerja.store.ST_tspkerja');
        var form = win.down('form');
        var values = form.getValues();
        var record = form.getRecord();
        var action = win.getAction();
        var recValue = Ext.create('Almindo.Tspkerja.model.M_tspkerja', values);
        console.log(action);

        if(action == 'edit'){
                if(form.isValid()){
                        this.doProsesCRUD('update',recValue);
                }
        }else{
                if(form.isValid()){
                        this.doProsesCRUD('create',recValue);
                }
        }
    },
    doProsesCRUD : function (inAction,record){
            var win = this.getFRM_tspkerja();
            var grid = this.getGRID_tspkerja();
            var store = grid.getStore();//Ext.getStore('ScontactStore');
            Ext.Ajax.request({
                    url: base_url + 'Tspkerja/' +  inAction,
                    method: 'POST',
                    type:'json',
                    params: JSON.stringify(record.data),
                    success: function(response){
                            switch(inAction) {
                                    case 'delete':
                                                    store.load();
                                                    createAlert('Delete S. P. K.', 'Delete Data Success', 'success');
                                            break;
                                    case 'create' :
                                                    store.load();
                                                    createAlert('Insert S. P. K.', 'Insert Data Success', 'success');
                                            break;
                                    case 'update' :
                                                    store.load();
                                                    createAlert('Update S. P. K.', 'Update Data Success', 'success');
                                            break;
                            }
        win.down('form').getForm().reset();
        win.setAction('add');

                    },
                    failure: function(response){
                            Ext.Msg.alert('server-side failure with status code ' + response.status  , response.responseText);

                    }
            });
    },
    onRowdblclick: function(me, record, item, index){
        var form = this.getFRM_tspkerja();
        
        var grid = this.getGRID_ttandaterimain_invoice();
        grid.store.reload();
        
        Ext.Ajax.request({
            url: base_url + 'Tspkerja/getGrid',
            params: {recdetail_doc: record.data.receipt_doc},
            method: 'POST',
            fields: ['recdetail_id','recdetail_doc','recdetail_invoice','recdetail_delivery','recdetail_po','recdetail_date','recdetail_price'],
            success: function(transport){
                form.setAction('edit');
                form.setRecordIndex(index);
                form.getForm().setValues(record.getData());
                Ext.getCmp('TAB_ttandaterimain').setActiveTab(0);
                grid.store.loadData(Ext.decode(transport.responseText));
            }
        });
    },
    deleteItem: function(record){
        Ext.Msg.confirm('Delete Data', 'Are you sure?', function (button) {
            if (button == 'yes') {
                this.doProsesCRUD('delete',record);
            }
        }, this);
    },
    print_file: function(record){
        var previewPrint = Ext.create('Ext.window.Window', {
            title: 'Print Preview',
            width: 1000,
            height: 600,
            modal   : true,
            closeAction: 'hide',
            items: [{ 
                     xtype: 'component',
                     html : '<iframe src="'+ base_url +'Tspkerja/print_file/'+ record.data.receipt_id +'" width="100%" height="550px"></iframe>',
                  }]
        });
        previewPrint.show();
    }
});