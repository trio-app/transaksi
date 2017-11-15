<script>
	
	Ext.application({
		name: 'Almindo',
		appFolder: 'application/APP',
		controllers: ['Almindo.RPdate.controller.C_rpdate'],
		launch: function(){
			Ext.create('Ext.container.Container',{
				overflowY: 'auto',
               layout: {
                                type: 'fit',
                                align: 'stretch'
                        },
				margin: '5',
				autoScroll: true,
				renderTo: 'ID_rpdate',
				defaultType: 'container',
				items: [{
					//columnWidth: 1/4,
					width: '20%',
                    items:[{xtype: 'FRM_rpdate'}]
                    },{
                    //columnWidth: 3/4,
                    width: '40%',
                    items:[{xtype: 'GRID_rpdate', /*store: Ext.create('Almindo.RPdate.store.ST_rpdate')*/}]
					},{
					//columnWidth: 3/4,
                    width: '40%',
                    items:[{xtype: 'GRIDS_rpdate', /*store: Ext.create('Almindo.RPdate.store.STS_rpdate')*/}]
				}
				]
			});
		}

	});

</script>

<div id="ID_rpdate"></div>