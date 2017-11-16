Ext.define('Almindo.Tspkerja.controller.C_tspkerja',{
    extend: 'Ext.app.Controller',
    views: [
        'Almindo.Tspkerja.view.TAB_tspkerja',
        'Almindo.Tspkerja.view.FRM_tspkerja',
        
        
        'Almindo.Mcustomer.view.GRID_mcustomer'
        
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
    }],
    init: function(){
            this.control({
                    'FRM_ttandaterimain button[action=add_cust]': {
                        click: this.showCust
                    },
                    'FRM_tspkerja button[action=btn_document]': {
                        click: this.showDocument
                    },
                    'WIN_ttincustomer > GRID_mcustomer': {
                        itemdblclick: this.getCustomer
                    },
                    'GRID_ttandaterimain_invoice button[action=add_invoice]': {
                        click: this.add_invoice
                    },
                    'TAB_ttandaterimain button[action=save_invoice]': {
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
        var win = this.getWIN_ttincustomer();
        win.show();
    },
    showDocument: function(){
        Ext.Ajax.request({
            url: base_url + 'Tspkerja/autoNum',
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

    },
    doSaveform: function(){
        var form = this.getFRM_ttandaterimain();
        var values = form.getValues();
        var action = form.getAction();
        var recValue = Ext.create('Almindo.Tspkerja.model.M_ttandaterimain', values);
        console.log(action);

        var grid = this.getGRID_ttandaterimain_invoice();
        var data = [];
        grid.store.each(function(rec){
            data.push(rec.data);
        });                                  

        if(action == 'edit'){
            if(form.isValid() && (grid.store.getCount() > 0)){
                this.doProsesCRUD('update',recValue,data);
                //this.doSaveGrid('updateGrid', data);
            }else{
                alert('coy');
            }
        }else{
            if(form.isValid() && (grid.store.getCount() > 0)){
                this.doProsesCRUD('create',recValue,data);
                //this.doSaveGrid('saveGrid', data);
            }else{
                alert('coy');
            }
        }
    },doProsesCRUD : function (inAction,record,data){
        var form = this.getFRM_ttandaterimain();
        var grid = this.getGRID_ttandaterimain_invoice();
        var grid2 = this.getGRID_ttandaterimain();
        var store = grid.getStore();
        var store2 = grid2.getStore();
        Ext.Ajax.request({
                    url: base_url + 'Tspkerja/' +  inAction,
                    method: 'POST',
                    type:'json',
                    params: [JSON.stringify(record.data),'||',JSON.stringify(data)],
                    success: function(response){
                        switch(inAction) {
                            case 'delete':
                                    form.getForm().reset();
                                    store.load();
                                    store2.load();
                                    createAlert('Delete Tanda Terima IN', 'Delete Data Success', 'success');
                                    //Ext.example.msg("Delete Category","Delete Success"," verb", record.data['CategoryName'] );    
                                break;
                            case 'create' :
                                    form.getForm().reset();
                                    store.load();
                                    store2.load();
                                    createAlert('Insert Tanda Terima IN', 'Insert Data Success', 'success');
                                break;
                            case 'update' :
                                    form.getForm().reset();
                                    store.load();
                                    store2.load();
                                    createAlert('Update Tanda Terima IN', 'Update Data Success', 'success');
                                break;
                        }
                        form.setAction('add');

                    },
                    failure: function(response){
                        //createAlert('Error ' + response.status, response.responseText, 'error');
                        Ext.Msg.alert('server-side failure with status code ' + response.status  , response.responseText);

                    }
                });
    },
    onRowdblclick: function(me, record, item, index){
        var form = this.getFRM_ttandaterimain();
        
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