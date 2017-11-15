    Ext.define('Almindo.RPdate.view.GRID_rpdate',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.GRID_rpdate',
    title: 'Report Packing List',
    //store: Ext.create('Almindo.Munit.store.ST_munit'),
    autoScroll: true,
    //frame:true,
    height: 250,
    requires: ['Ext.ux.exporter.Exporter'],
    initComponent: function () {
      this.title = 'Packinglist';

        this.tbar = Ext.create('Ext.PagingToolbar', {
        store: this.store,
        //displayInfo: false,
        displayMsg: 'Total Data {0} - {1} of {2}',
        //emptyMsg: "No Data Display"
        items:[
          '->',
                {
                    xtype: 'exporterbutton',
                    text: 'Export',
                    icon: extjs_url + 'resources/css/icons/grid.png',
                    //format: 'excel',
                    //title: 'Report Transaksi By Customer'
                }]
        });
        this.columns = [
                    {xtype: 'rownumberer'},
                    {header: 'Customer', dataIndex: 'customer_nama', width:150},
                    {header: 'Date', dataIndex: 'transaksi_date', width:120},
                    {header: 'Document No.', dataIndex: 'transaksi_doc', width:150},
                    {header: 'Amount', dataIndex:'Amount',width:150, xtype:'numbercolumn', format: '0,000,000.00'}
        ];
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