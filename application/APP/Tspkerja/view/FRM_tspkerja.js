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
                fieldLabel: 'Document Number',
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
            xtype: 'container',
            layout: 'hbox',
            items: [{
                xtype: 'box',
                flex: 1
            },{
                xtype: 'button',
                text: 'View List Surat Perintah Kerja',
                icon: extjs_url + 'resources/ext-theme-classic/images/grid/group-by.gif',
                handler: function(){
                    var tab = Ext.getCmp('TAB_tpackinglist');
                    tab.setActiveTab(1);
                }
            }]
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        defaults: {
            flex: 1,
            margin: '5 5 5 5'
        },
        items: [{
            fieldLabel: 'PO Number',
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
            fieldLabel: 'Order Date',
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
                xtype: 'container',
                layout: 'hbox',
                defaults: {
                    flex: 1
                },
                items: [{
                    xtype: 'container',
                    layout: 'hbox',
                    defaults: {
                        flex: 1
                    },
                    items: [{
                        name: 'customer_id',
                        xtype: 'hidden',
                        fieldLabel: 'id'
                    },{
                        name: 'customer_nama',
                        xtype: 'textfield',
                        fieldLabel: 'Customer',
                        fieldStyle: 'background-color: #ffa144; background-image: none;',
                        labelWidth: 120
                    },{
                        icon: base_url + 'system/img/user_add.gif',
                        xtype: 'button',
                        text: 'Pilih Customer',
                        flex: 0,
                        width: 120,
                        margin: '0 10'
                    }]
                },{
                    xtype: 'container',
                }]
                
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        defaults: {
            margin: '5 5 5 5',
            flex: 1
        },
        items: [{
                xtype: 'container',
                layout: 'hbox',
                defaults: {
                    flex: 1
                },
                items: [{
                        xtype: 'container',
                        layout: 'hbox',
                        defaults: {
                            flex: 1
                        },
                            items: [{
                            xtype: 'textfield',
                            fieldStyle: 'background-color: #ffa144; background-image: none;',
                            labelWidth: 120,
                            fieldLabel: 'Produk'
                        },{
                            xtype: 'button',
                            icon: base_url + 'system/img/user_add.gif',
                            width: 120,
                            text: 'Pilih Produk',
                            flex: 0,
                            margin: '0 10'
                }]
                },{
                    xtype: 'container',
                    layout: 'hbox',
                    defaults: {
                        flex: 1
                    },
                    items:[{
                        xtype: 'textfield',
                        fieldLabel: 'filename'
                    },{
                        xtype: 'filefield',
                        fieldLabel: 'Gambar Mata Pisau'
                    }]
                }]
                
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        margin: '0 5',
        defaults: {
            xtype: 'textfield',
            flex: 1,
            fieldStyle: 'background-color: #ffa144; background-image: none;',
        },
        items: [{
            fieldLabel: 'Jenis Bahan ',
            labelWidth: 120,
        },{
            fieldLabel: 'Merk Bahan ',
            margin: '0 5',
        },{
            fieldLabel: 'Bentuk Label ',
            margin: '0 5',
        },{
            fieldLabel: 'Porporasi ',
            margin: '0 0 0 5',
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        items: [{
            xtype: 'container',
            layout: 'hbox',
            flex: 1,
            margin: '5 5',
            defaults: {
                flex: 1,
            },
            items: [{
                xtype: 'container',
                layout: 'hbox',
                defaults: {
                    flex: 1
                },
                items: [{
                    xtype: 'container',
                    layout: 'hbox',
                    items: [{
                        xtype: 'box',
                        margin: '5 0',
                        html: 'Ukuran :',
                        width: 120
                    },{
                        xtype: 'numberfield',
                        fieldStyle: 'background-color: #ffa144; background-image: none;',
                        flex: 1,
                        margin: '0 5',
                    },{
                        xtype: 'box',
                        html: 'x',
                        margin: '5',
                    },{
                        xtype: 'numberfield',
                        fieldStyle: 'background-color: #ffa144; background-image: none;',
                        flex: 1,
                        margin: '0 5',
                    }]
                },{
                    xtype: 'container',
                    layout: 'hbox',
                    items: [{
                        xtype: 'numberfield',
                        fieldLabel: 'Baris Mata Pisau',
                        flex: 1,
                        margin: '0 5',
                    },{
                        xtype: 'numberfield',
                        fieldLabel: 'GAP',
                        fieldStyle: 'background-color: #ffa144; background-image: none;',
                        flex: 1,
                        margin: '0 0 0 5',
                    }]
                }]
            }]
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        margin: '0 5',
        defaults: {
            flex: 1,
            xtype: 'numberfield'
        },
        items: [{
            labelWidth: 120,
            fieldLabel: 'Total baris Order '
        },{
            margin: '0 5',
            fieldLabel: 'Total Mata Pisau '
        },{
            margin: '0 5',
            xtype: 'box',
            flex: 2
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        margin: '5',
        defaults: {
            xtype: 'textfield',
            flex: 1,
            fieldStyle: 'background-color: #ffa144; background-image: none;',
        },
        items: [{
            fieldLabel: 'Warna Cetakan ',
            labelWidth: 120,
        },{
            fieldLabel: 'Arah Gulungan ',
            margin: '0 5',
        },{
            fieldLabel: 'Sensor ',
            margin: '0 5',
        },{
            fieldLabel: 'Core ',
            margin: '0 0 0 5',
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        margin: '5',
        defaults: {
            flex: 1
        },
        items: [{
            xtype: 'numberfield',
            labelWidth: 120,
            fieldLabel: 'Qty Order '
        },{
            xtype: 'numberfield',
            fieldLabel: 'Qty UPP ',
            margin: '0 5',
        },{
            xtype: 'numberfield',
            fieldLabel: 'Qty Total ',
            margin: '0 5',
        },{
            margin: '0 0 0 5',
            xtype: 'container',
            layout: 'hbox',
            defaults: {
                flex: 1,
                labelWidth: 65
            },
            items: [{
                xtype: 'textfield',
                fieldLabel: 'Qty Type '
            },{
                xtype: 'textfield',
                margin: '0 0 0 5',
                fieldLabel: 'Total Type '
            }]
        }]
    },{
        xtype: 'box',
        flex: 1,
        margin: '0 5',
        html: '<h4>BAHAN BAKU YANG DIGUNAKAN</h4>'
    },{
        xtype: 'container',
        layout: 'hbox',
        defaults: {
            flex: 1
        },
        items: [{
            xtype: 'textfield',
            margin: '0 5',
            fieldLabel: 'Jenis Bahan ',
            fieldStyle: 'background-color: #ffa144; background-image: none;',
        },{
            xtype: 'container',
            layout: 'hbox',
            defaults: {
                flex: 1
            },
            items: [{
                xtype: 'box',
                margin: '5',
                html: 'Ukuran :',
                flex: 0
            },{
                xtype: 'numberfield',
                fieldStyle: 'background-color: #ffa144; background-image: none;',
                margin: '0 5',
                width: 120
            },{
                xtype: 'box',
                margin: '5',
                html: 'x',
                flex: 0
            },{
                xtype: 'numberfield',
                fieldStyle: 'background-color: #ffa144; background-image: none;',
                width: 120,
                margin: '0 0 0 5',
            }]
        },{
            xtype: 'box',
        }]
    },{
        xtype: 'container',
        layout: 'hbox',
        margin: '5 0',
        defaults: {
            flex: 1
        },
        items: [{
            xtype: 'container',
            margin: '0 5',
            layout: 'vbox',
            items: [{
                xtype: 'numberfield',
                fieldStyle: 'background-color: #ffa144; background-image: none;',
                fieldLabel: 'Jumlah Roll '
            },{
                xtype: 'numberfield',
                fieldStyle: 'background-color: #ffa144; background-image: none;',
                fieldLabel: 'Total '
            },{
                xtype: 'numberfield',
                fieldStyle: 'background-color: #ffa144; background-image: none;',
                fieldLabel: 'Total M<sup>2</sup> '
            }]
        },{
            xtype: 'container',
            layout: 'vbox',
            margin: '0 5',
            items: [{
                xtype: 'datefield',
                fieldLabel: 'Tanggal Kirim '
            },{
                xtype: 'textfield',
                fieldLabel: 'No. Surat Jalan'
            }]
        },{
            xtype: 'textarea',
            fieldLabel: 'Keterangan ',
        }]
    }]
});