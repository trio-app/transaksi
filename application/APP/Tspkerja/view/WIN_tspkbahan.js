Ext.define('Almindo.Tspkerja.view.WIN_tspkbahan',{
    extend: 'Ext.window.Window',
    alias: 'widget.WIN_tspkbahan',
    title   : 'Pilih Customer',
    width   : 750,
    layout  : 'fit',
    resizable: false,
    closeAction: 'hide',
    modal   : true,
    items: [
        Ext.create('Almindo.Mbahan.view.GRID_mbahan',{
            title: '',
            border: 0,
            store: Ext.create('Almindo.Mbahan.store.ST_mbahan')
        })
    ]
});