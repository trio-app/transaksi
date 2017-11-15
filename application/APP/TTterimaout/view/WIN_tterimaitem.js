Ext.define('Almindo.TTterimaout.view.WIN_tterimaitem',{
	extend: 'Ext.window.Window',
	alias: 'widget.WIN_tterimaitem',
	title: 'Pilih Item',
	width: 750,
	layout: 'fit',
	resizeable: false,
	closeAction: 'hide',
	modal: true,
	items: [
		Ext.create('Almindo.TTterimaout.view.')
	]

})