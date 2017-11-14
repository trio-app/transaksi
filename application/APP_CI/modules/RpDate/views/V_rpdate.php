<script>
	
	Ext.application({
		name: 'Almindo',
		appFolder: 'application/APP',
		controllers: ['Almindo.RPdate.controller.C_rpdate'],
		launch: function(){
			Ext.create('Ext.container.Container',{
				layout: 'column',
				margin: '5',
				autoScroll: true,
				renderTo: 'ID_rpdate',
				defaultType: 'container',
				items: [{
					columnWidth: 1/4,
                    padding: '0 5 5 5',
                    items:[{xtype: 'FRM_rpdate'}]
                    },{
                    columnWidth: 3/4,
                    padding: '0 0 5 5',
                    items:[{xtype: 'GRID_rpdate', store: Ext.create('Almindo.RPdate.store.ST_rpdate')}]
				}]
			});
		}

	});

</script>

<div id="ID_rpdate"></div>