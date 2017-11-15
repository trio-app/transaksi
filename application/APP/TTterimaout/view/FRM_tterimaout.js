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
            margin: '5 0 5 10'
        },
        items: [{
            xtype: 'container',
            layout: 'hbox',
            items: [{
                flex : 1,
                name: 'receipt_doc',
                id: 'receipt_doc',
                xtype: 'textfield',
                fieldLabel: 'Document Number ',
                emptyText: 'Auto Number',
                readOnly: true,
                labelWidth:120,
                fieldStyle: 'background-color: #ffa144; background-image: none;',
            },{
                margin: '0 0 0 10',
                action: 'btn_document',
                xtype: 'button',
                tooltip: 'Klik untuk melihat Nomor Document',
                icon: extjs_url + 'resources/ext-theme-classic/images/grid/refresh.gif',
            }]
        },{
            xtype: 'datefield',
            fieldLabel: 'Document Date ',
            name:'receipt_date',
            labelWidth:120,
            format: 'Y-m-d'
        },{
            xtype: 'box',
            flex: 1
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        defaults: {
            flex: 1,
            margin: '5 5 5 10'
        },
        items: [{
            readOnly: true,
            xtype: 'textfield',
            fieldLabel: 'Supplier ',
            labelWidth: 120,
            fieldStyle: 'background-color: #ffa144; background-image: none;',
            value: 'ALMINDO PRATAMA CV.'
        },{
            xtype: 'box',
            flex: 2
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        defaults: {
            flex: 1,
        },
        items: [{
            margin: '5 0 5 10',
            name: 'customer_nama',
            readOnly: true,
            xtype: 'textfield',
            fieldLabel: 'Customer ',
            labelWidth: 120,
            fieldStyle: 'background-color: #ffa144; background-image: none;'
        },{
            readOnly: true,
            name: 'customer_cp',
            margin: '5 0 5 10',
            xtype: 'textfield',
            fieldLabel: 'Contact Person ',
            labelWidth: 120,
            fieldStyle: 'background-color: #ffa144; background-image: none;'
        },{
            readOnly: true,
            name: 'customer_telp',
            margin: '5 10 5 5',
            xtype: 'textfield',
            fieldLabel: 'Phone ',
            labelWidth: 120,
            fieldStyle: 'background-color: #ffa144; background-image: none;'
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        defaults: {
            flex: 1,
            margin: '5 0 5 10'
        },
        items: [{
            readOnly: true,
            name: 'customer_email',
            xtype: 'textfield',
            fieldLabel: 'Email ',
            labelWidth: 120,
            fieldStyle: 'background-color: #ffa144; background-image: none;'
        },{
            readOnly: true,
            name: 'customer_alamat',
            flex: 2,
            margin: '5 10',
            xtype: 'textarea',
            fieldLabel: 'Alamat ',
            labelWidth: 120,
            height: 50,
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