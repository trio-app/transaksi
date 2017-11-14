	Ext.define('Almindo.Mmerk.view.GRID_mmerk',{
		extend: 'Ext.grid.Panel',
		alias: 'widget.GRID_mmerk',
		title: 'Master Data Merk',
		height: 400,
		//store: Ext.create('Almindo.Mmerk.store.ST_mmerk'),
		initComponent: function(){
			this.tbar =[
			'->',
			{
				xtype: 'textfield',
				itemId: 'searchData',
				emptyText: 'Search Data',
				fielStyle: 'text-align: left; align:right;'
			}
			];
		this.columns = [
            { xtype: 'rownumberer' },
            { header: 'Nama Merk ', dataIndex: 'merk_nama'},
            { header: 'Description ', dataIndex: 'merk_desc'},
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