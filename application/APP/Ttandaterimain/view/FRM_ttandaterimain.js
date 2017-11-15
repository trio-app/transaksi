Ext.define('Almindo.Ttandaterimain.view.FRM_ttandaterimain',{
    extend: 'Ext.form.Panel',
    alias: 'widget.FRM_ttandaterimain',
    //frame: true,
    margin: '10 10 10 10',
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
                flex : 1,
                name: 'receipt_doc',
                id: 'receipt_doc',
                xtype: 'textfield',
                fieldLabel: 'No. Document',
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
            readOnly: true,
            xtype: 'textfield',
            fieldLabel: 'Tujuan ',
            labelWidth: 120,
            fieldStyle: 'background-color: #ffa144; background-image: none;',
            value: 'ALMINDO PRATAMA CV.',
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        defaults: {
            flex: 1,
        },
        items: [{
            margin: '5 5 5 5',
            name: 'customer_nama',
            readOnly: true,
            xtype: 'textfield',
            fieldLabel: 'Dikirim Dari',
            labelWidth: 120,
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
                var tab = Ext.getCmp('TAB_ttandaterimain');
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