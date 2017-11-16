Ext.define('Almindo.Tspkerja.view.FRM_tspkerja',{
    extend: 'Ext.form.Panel',
    alias: 'widget.FRM_tspkerja',
    frame: true,
    margin: '10 10 0 10',
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
                name: 'spk_doc',
                id: 'spk_doc',
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
            name:'spk_date',
            labelWidth:120,
            format: 'Y-m-d'
        },{
            icon: extjs_url + 'resources/ext-theme-classic/images/grid/group-by.gif',
            xtype: 'button',
            text: 'View List Data SPK',
            flex: 0,
            handler: function(){
                var tab = Ext.getCmp('TAB_tspkerja');
                tab.setActiveTab(1);
            }
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        defaults: {
            flex: 1,
            margin: '5 5 5 5'
        },
        items: [{
            fieldLabel: 'No. PO',
            name: 'spk_nopo',
            margin: '5 5 5 5',
            readOnly: false,
            labelWidth: 120,
            fieldStyle: 'background-color: #ffa144; background-image: none;',
            xtype: 'textfield',
            flex: 1
        },{
            name: 'spk_delivery',
            readOnly: false,
            xtype: 'datefield',
            fieldLabel: 'Delivery Date',
            labelWidth: 120,
            flex: 1
        },{
            xtype: 'box',
            flex: 1
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        defaults: {
            margin: '5 5 5 5',
            flex: 1
        },
        items: [{
            xtype: 'hidden',
            name: 'customer_id',
            fieldLabel: 'ID',
            allowBlank: false,
            flex: 2
        },{
            xtype: 'textfield',
            name: 'customer_nama',
            fieldLabel: 'Customer',
            fieldStyle: 'background-color: #ffa144; background-image: none;',
            allowBlank: false,
            labelWidth: 120,
            flex: 1,
            readOnly: true
        },{
            icon: base_url + 'system/img/user_add.gif',
            xtype: 'button',
            action: 'add_cust',
            text: 'Pilih Customer',
        },{
            xtype: 'box',
            flex: 1
        }]
    }]
});