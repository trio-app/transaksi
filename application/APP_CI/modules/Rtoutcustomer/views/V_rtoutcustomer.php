<script>
/*Ext.onReady(function () {
    Ext.Loader.setConfig({
                    enabled: true,
                    disableCaching: false,
                    paths: {
                        'Ext.ux.exporter': 'system/extjs/src/ux/exporter'
                    }
                });  */          
    Ext.application({
        name: 'Almindo',
        appFolder: 'application/app',
        controllers: ['Almindo.Rtoutcustomer.controller.C_rtoutcustomer'],
        launch: function(){
               Ext.create('Ext.container.Container', {
               overflowY: 'auto',
               layout: {
                                type: 'fit',
                                align: 'stretch'
                        },
               margin: '5',
               autoScroll: true,
               renderTo: 'ID_rtoutcustomer',
               defaultType: 'container',
               items: [{
                    //columnWidth: 1/4,
                    width: '500',
                    items:[{xtype: 'FRM_rtoutcustomer'}]
                    },{
                    //columnWidth: 3/4,
                    width: '500',
                    items:[{xtype: 'GRID_rtoutcustomer', store: Ext.create('Almindo.Rtoutcustomer.store.ST_rtoutcustomer')}]
                    },{
                    //columnWidth: 3/4,
                    width: '500',
                    items:[{xtype: 'GRIDS_rtoutcustomer', store: Ext.create('Almindo.Rtoutcustomer.store.STS_rtoutcustomer')}]
                    }]
                });
                
            }
        }
    );    
//});

</script>
<div id="ID_rtoutcustomer"></div>