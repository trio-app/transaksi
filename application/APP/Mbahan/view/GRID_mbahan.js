    Ext.define('Almindo.Mbahan.view.GRID_mbahan',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.GRID_mbahan',
    id: 'GRID_mbahan',
    title: 'Master Data Produk',
    height: 420,
    frame: true,
    //store: Ext.create('Almindo.Mbahan.store.ST_mbahan'),
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
            { header: 'Nama Produk', dataIndex: 'bahan_nama', locked: true},
            { header: 'Merk', dataIndex: 'bahan_merk', locked: true},
            { header: 'Jenis Bahan', dataIndex: 'bahan_jenis', locked: true},
            { header: 'GAP', dataIndex: 'bahan_gap'},
            { header: 'Bentuk Ukuran', dataIndex: 'bahan_bentuk'},
            { header: 'Warna Glasin', dataIndex: 'bahan_glasin'},
            { header: 'Ukuran Panjang', dataIndex: 'bahan_ukuranP'},
            { header: 'Ukuran Lebar', dataIndex: 'bahan_ukuranL'},
            { header: 'File Name', dataIndex: 'bahan_gambar'},
            { header: 'PORPORASI', dataIndex: 'bahan_porporasi'},
            { header: 'Warna Cetakan', dataIndex: 'bahan_warnacetakan'},
            { header: 'Qty Name', dataIndex: 'bahan_qtyname',},
            { header: 'Total Name', dataIndex: 'bahan_totalname'},
            { header: 'Core', dataIndex: 'bahan_core', flex: 1},
            { header: 'Arah Gulungan', dataIndex: 'bahan_arahgulungan'},
            { header: 'Sensor', dataIndex: 'bahan_sensor'},
        ];
      this.bbar = Ext.create('Ext.PagingToolbar', {
        store: this.store,
        displayInfo: true,
        displayMsg: 'Total Data {0} - {1} of {2}',
        emptyMsg: "No Data Display"
        });
        this.addEvents('removeitem');
        //this.addEvents('add_img');
        this.actions = {
           /* add_img: Ext.create('Ext.Action', {
                text: 'Update Picture',
                handler: function () { this.fireEvent('add_img', this.getSelected()) },
                scope: this,
                icon: extjs_url + 'resources/css/icons/image_add.png',
            }), */
            removeitem: Ext.create('Ext.Action', {
                text: 'Delete Record',
                handler: function () { this.fireEvent('removeitem', this.getSelected()) },
                scope: this,
                icon: extjs_url + 'resources/css/icons/delete.gif',
            })
        };
        var contextMenu = Ext.create('Ext.menu.Menu', {
            items: [
                //this.actions.add_img,
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