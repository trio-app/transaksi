    Ext.define('Almindo.Mcustomer.view.GRID_mcustomer',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.GRID_mcustomer',
    title: 'Master Data Customer',
    height: 400,
    //store: Ext.create('Almindo.Mcustomer.store.ST_mcustomer'),
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
            { header: 'Nama Perusaan ', dataIndex: 'customer_nama', flex: 1 },
            { header: 'Alamat Lengkap', dataIndex: 'customer_alamat', flex: 1 },
            { header: 'No. Telp', dataIndex: 'customer_telp', flex: 1 },
            { header: 'Contact Peson', dataIndex:'customer_cp', flex: 1},
            { header: 'Email ', dataIndex: 'customer_email', flex: 1 },           
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