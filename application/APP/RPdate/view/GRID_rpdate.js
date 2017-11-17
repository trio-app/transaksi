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

        this.tbar = [
            {
                xtype: 'exporterbutton',
                text: 'Export',
                icon: extjs_url + 'resources/css/icons/grid.png',
            }],
        this.columns = [
                    {xtype: 'rownumberer'},
                    {header: 'Customer', dataIndex: 'customer_nama', width:150},
                    {header: 'Date', dataIndex: 'transaksi_date', width:120},
                    {header: 'Document No.', dataIndex: 'transaksi_doc', width:150},
                    {header: 'Amount', dataIndex:'Amount',width:150, xtype:'numbercolumn', format: '0,000,000.00'}
        ];
        
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