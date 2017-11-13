    Ext.define('Almindo.Mitem.view.GRID_mitem',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.GRID_mitem',
    title: 'Master Data item',
    height: 400,
    //store: Ext.create('Almindo.Mitem.store.ST_mitem'),
    initComponent: function () {
        this.tbar = [
          '->',
        {
            xtype: 'textfield',
            itemId:'searchData',
            emptyText: 'Search Data',
            fieldStyle: 'text-align: left;align:right;'
        }    
        ];
        this.columns = [
            { xtype: 'rownumberer' },
            { header: 'Kode Item ', dataIndex: 'item_kode'},
            { header: 'Nama Item ', dataIndex: 'item_nama', width: 200},
            { header: 'Category ', dataIndex: 'item_category'},
            { header: 'Unit ', dataIndex: 'item_unit'},
            { header: 'Harga ', dataIndex: 'item_harga', xtype: 'numbercolumn'},
            { header: 'Berat / Weight ', dataIndex: 'item_weight', xtype: 'numbercolumn', format:'0.0000'},
            { header: 'UPP ', dataIndex: 'item_upp', xtype: 'numbercolumn'},
        ];
      this.bbar = Ext.create('Ext.PagingToolbar', {
        store: this.store,
        displayInfo: true,
        displayMsg: 'Total Data {0} - {1} of {2}',
        emptyMsg: "No Data Display"
        });
        this.addEvents('removeitem');
        this.actions = {
            removeitem: Ext.create('Ext.Action', {
                text: 'Delete Record',
                handler: function () { this.fireEvent('removeitem', this.getSelected()) },
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
		});