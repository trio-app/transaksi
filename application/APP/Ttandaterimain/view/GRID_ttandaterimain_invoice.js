Ext.define('Almindo.Ttandaterimain.view.GRID_ttandaterimain_invoice',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.GRID_ttandaterimain_invoice',
    id: 'GRID_ttandaterimain_invoice',
    height: 240,
    //frame: true,
    margin: '0 10',
    store: Ext.create('Ext.data.ArrayStore',{
        fields: [
            'recdetail_doc',
            'recdetail_invoice',
            'recdetail_delivery', 
            'recdetail_po', 
            'recdetail_date', 
            {name : 'recdetail_price', type : 'float'},
        ],
        autoLoad: true,
        proxy: {
            type: 'memory'
        }
    }),
    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
                clicksToMoveEditor: 1,
                autoCancel: false,
                listeners: {
                    edit: function(editor, e){
                        e.record.commit();
                    }
                }
        })                            
    ],
    viewConfig : {
        listeners : {
        'itemkeydown' : function(view, record, item, index, key) {
            if (key.getKey() == 46) {//the delete button
                var selection = this.getSelectionModel().getSelection();
                var grid = this.up('grid');
                grid.store.remove(selection);
                //delete records
                }  
            }

        },
    },                        
    initComponent: function(){
        this.tbar= [{
            text: 'Tambah Invoice',
            action: 'add_invoice',
            icon: extjs_url + 'resources/ext-theme-classic/images/dd/drop-add.gif',
        }];
        this.columns= [
            { xtype: 'rownumberer' },
            { header: 'NO Invoice', dataIndex: 'recdetail_invoice',
                editor: {
                    allowBlank: false
                }
            },    
            { header: 'NO Surat Jalan', dataIndex: 'recdetail_delivery',
                editor: {
                    allowBlank: false
                }
            },    
            { header: 'PO.', dataIndex: 'recdetail_po',
                editor: {
                    allowBlank: false
                }            
            },    
            { header: 'TGL Invoice', dataIndex: 'recdetail_date',  
                editor: {
                    allowBlank: false
                }
            },       
            { header: 'Nominal', dataIndex: 'recdetail_price', xtype: 'numbercolumn',
                editor: {
                    xtype: 'numberfield',                    
                    allowBlank: false
                } , 
            },     
        ];

        this.addEvents('removeitem');
        this.actions = {
            removeitem: Ext.create('Ext.Action', {
                text: 'Delete Invoice',
                handler: function () {
                    this.store.remove(this.getSelected());
                    //this.fireEvent('removeitem', this.getSelected())
                },
                scope: this,
                icon: extjs_url + 'resources/css/icons/delete.gif',
            })
        };
        var contextMenu = Ext.create('Ext.menu.Menu', {
            items: [
                this.actions.removeitem
            ]
        });
        this.on({
            itemcontextmenu: function (view, rec, node, index, e) {
                e.stopEvent();
                contextMenu.showAt(e.getXY());
                return false;
            }
        });                
        this.callParent(arguments);
    },
    getSelected: function () {
         var sm = this.getSelectionModel();
         var rs = sm.getSelection();
         if (rs.length) {
             return rs[0];
         }
         return null;
     }                        
})