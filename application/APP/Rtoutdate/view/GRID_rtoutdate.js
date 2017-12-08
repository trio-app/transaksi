Ext.define('Almindo.Rtoutdate.view.GRID_rtoutdate',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.GRID_rtoutdate',
    title: 'Tanda Terima Out',
    border: 2,
    height: 250,
    initComponent: function () {
           this.columns= [
               {header: 'No.', xtype: 'rownumberer'},
               {header: 'Customer', dataIndex: 'customer_nama', width:150},
               {header: 'Date', dataIndex: 'receiptout_date', width:120},
               {header: 'Document No.', dataIndex: 'receiptout_doc', width:150},
               {header: 'Nominal', dataIndex:'Price',width:150, xtype:'numbercolumn', format: '0,000,000.00'}

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