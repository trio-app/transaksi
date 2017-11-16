Ext.define('Almindo.TTterimaout.view.FRM_tterimaout',{
    extend: 'Ext.form.Panel',
    alias: 'widget.FRM_tterimaout',
    frame: true,
    border: 0,
    margin: 10,
    config: {
        recordIndex: 0,
        action: ''
    },   
    items: [{
        xtype: 'container',
        layout: 'hbox',
        defaults: {
            flex: 1,
            margin: '5 5 5 5'
        },
        items: [{
            xtype: 'container',
            layout: 'hbox',
            items: [{
                margin: '5 5 5 5',
                name: 'receiptout_doc',
                id: 'receiptout_doc',
                xtype: 'textfield',
                fieldLabel: 'Document Number ',
                emptyText: 'Auto Number',
                readOnly: true,
                labelWidth:120,
                fieldStyle: 'background-color: #ffa144; background-image: none;',
            },{
                margin: '5 5 5 5',
                action: 'btn_document',
                xtype: 'button',
                tooltip: 'Klik untuk melihat Nomor Document',
                icon: extjs_url + 'resources/ext-theme-classic/images/grid/refresh.gif',
            },{
                xtype: 'datefield',
                fieldLabel: 'Document Date :',
                name:'receiptout_date',
                margin: '5 5 5 5',
                labelWidth:120,
                format: 'Y-m-d'
            },{
            readOnly: true,
            xtype: 'textfield',
            fieldLabel: 'Supplier',
            margin: '5 5 5 5',
            labelWidth: 120,
            fieldStyle: 'background-color: #ffa144; background-image: none;',
            value: 'ALMINDO PRATAMA CV.'
        }]
        
       }]
    },{
        xtype: 'container',
        layout: 'hbox',
        defaults: {
            flex: 1,
        },
        items: [{
            name: 'customer_id',
            margin: '5 5 5 5',
            readOnly: true,
            xtype: 'hidden',
        },{
            margin: '5 0 5 10',
            name: 'customer_nama',
            readOnly: true,
            xtype: 'textfield',
            fieldLabel: 'Tujuan ',
            labelWidth: 100,
            allowBlank: false,
            fieldStyle: 'background-color: #ffa144; background-image: none;'
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        defaults: {
            margin: '5 10'
        },
        items: [{
            xtype: 'box',
            flex: 1
        },{
            icon: extjs_url + 'resources/ext-theme-classic/images/grid/group-by.gif',
            xtype: 'button',
            text: 'View List Data Packing List',
            handler: function(){
                var tab = Ext.getCmp('TAB_tterimaout');
                tab.setActiveTab(1);
            }
        },{
            icon: base_url + 'system/img/user_add.gif',
            xtype: 'button',
            action: 'add_cust',
            text: 'Pilih Customer'
        }]
    }]
});