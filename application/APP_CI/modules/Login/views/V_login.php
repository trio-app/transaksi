<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <!-- application title -->
        <title><?php echo app_title() . ' - ' . strip_tags(app_ver()); ?></title>
        <!-- included file -->
        <link rel="stylesheet" type="text/css" href="<?php echo extjs_url('packages/ext-theme-classic/build/resources/ext-theme-classic-all.css') ?>">
        <script type="text/javascript" src="<?php echo extjs_url('ext-all-debug.js') ?>"></script>
        <script type="text/javascript" src="<?php echo extjs_url('notification.js') ?>"></script>
        <script type="text/javascript" src="<?php echo extjs_url('createAlert.js') ?>"></script>
        <link rel="stylesheet" type="text/css" href="<?php echo extjs_url('resources/css/notification.css') ?>">
        
    <script type="text/javascript">    
        // base variable        
        var base_url = '<?php echo base_url(); ?>';
        var extjs_url = '<?php echo extjs_url(); ?>';
 
    </script>   
    <script type="text/javascript">
        // function run when ready
        Ext.onReady(function(){
            Ext.create('Ext.container.Viewport', {
                    layout: {
                            type: 'vbox',
                            align: 'center',
                            pack: 'center'
                    },
                    items: [
                        Ext.create('Ext.form.Panel', {
                            layout: {
                                type: 'vbox',
                                align: 'center',
                                pack: 'center'
                            },
                            id: 'formLogin',
                            title : '<?php echo app_title() . ' - ' . app_ver();  ?>',
                            titleAlign : 'center',
                            height: 200,
                            width: 320,
                            bodyPadding: '20',
                            defaultType: 'textfield',
                            frame: true,
                            items: [
                                {
                                    fieldLabel: 'User Name',
                                    id: 'user',
                                    name: 'userid',
                                    width: '100%',
                                    allowBlank: false,
                                    tabIndex: 1,
                                    listeners: {
                                        afterrender: function(user){
                                            user.focus(true);
                                        }
                                    }
                                },
                                {
                                    fieldLabel: 'Password',
                                    name: 'userpass',
                                    width: '100%',
                                    allowBlank: false,
                                    inputType: 'password',
                                    tabIndex: 2
                                }
                            ],
                            buttons: [{
                                text: 'Login',
                                tabIndex: 3,
                                formBind:true,
                                handler: function(btn) {
                                    var selection = Ext.getCmp('formLogin').getForm().getFieldValues();
                                    if (Ext.getCmp('formLogin').getForm().isValid()) {
                                        Ext.Ajax.request({
                                            url: base_url + 'Login/Signin',
                                            method: 'POST',
                                            type: 'json',
                                            params: JSON.stringify(Ext.getCmp('formLogin').getForm().getFieldValues()),
                                                success: function(response){
                                                    if(response.responseText == 'success'){
                                                        createAlert('Login Success', 'Selamat Datang User', 'info');
                                                        window.location.assign(base_url + 'Home');
                                                    }else{
                                                        createAlert('Login Failed', 'Periksa Kembali User Name dan Password', 'error');
                                                    }
                                                }
                                        });
                                    }
                                }
                            }]                              
			})
                    ]
            });
        });
        
    </script>
    </head>
    <body>
        <div id="toolbar"></div>
    </body>
</html>