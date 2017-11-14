<script>
	
	Ext.application({
		name: 'Almindo',
		appFolder: 'application/APP',
		controllers: ['Almindo.RBydate.controller.C_rbydate'],
		launch: function(){
			Ext.create('Ext.container.Container',{
				layout: 'column',
				margin: '5',
				autoScroll: true,
				renderTo: 'ID_rbydate',
				defaultType: 'container',
				items: [{
					columnWidth: 1/4,
                    padding: '0 5 5 5',
                    items:[{xtype: 'FRM_rbydate'}]
                    },{
                    columnWidth: 3/4,
                    padding: '0 0 5 5',
                    items:[{xtype: 'GRID_rbydate', store: Ext.create('Almindo.Mcustomer.store.ST_rbydate')}]
				}]
			});
		}

	});



</script>