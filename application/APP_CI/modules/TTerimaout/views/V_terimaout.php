<script>

	Ext.application({
		name: 'Almindo',
		appFolder: 'application/APP',
		controllers: 'Almindo.TTerimaout.controller.C_terimaout',
		launch: function(){
			Ext.create('Ext.container.Container', {
				layout: 'column',
				margin: '5',
				autoScroll: true,
				renderTo: 'ID_TTerimaout',
				defaultType: 'container',
				items: [{
						columnWidth: 1/1,
						padding: '5',
						items: [{xtype: 'TAB_terimaout'}]
				}]
			});
		}
	});	
</script>

<div id="ID_TTerimaout"></div>