Ext.application({
    name: 'swt',

    launch: function() {

        Ext.create('Ext.data.TreeStore', {
            storeId: 'TreeStore',
            fields: ['title', 'link', 'author', 'contentSnippet', 'content', {
                name: 'leaf',
                defaultValue: true
            }],
            root: {
                leaf: false
            },
            proxy: {
                type: 'jsonp',
                url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog',
                reader: {
                    type: 'json',
                    rootProperty: 'responseData.feed.entries'
                }
            }
        });        
        Ext.create("Ext.tab.Panel", {
            fullscreen: true,

            items: [
                {
                    title: 'Start',
                    iconCls: 'home',
                    cls: 'home',
                    html: [
                        '<center><br>',
                        'Willkommen!',
                        '<br><br>',
                        "Dies ist eine Test-App, die von mir entwickelt wurde!",
                        '<br>',
                        "Sie dient einzig und allein dem Ausprobieren von Sencha ",
                        '<br>',
                        "Touch und wurde für SWTP hergestellt.<center>"
                    ].join("")
                },{
                    title: 'Content',
                    iconCls: 'star',
                    cls: 'home',
                    html: [
                        '<center><br>',
                        "Hier könnte Ihre Werbung stehen!",
                        '<center>'
                    ].join("")
                },
                {
                    title: 'Kontakt',
                    iconCls: 'user',
                    xtype: 'formpanel',
                    url: 'contact.php',
                    layout: 'vbox',

                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Kontakt',
                            instructions: '* - optional',
                            height: 285,
                            items: [
                                {
                                    xtype: 'textfield',
                                    label: 'Name'
                                },
                                {
                                    xtype: 'emailfield',
                                    label: 'E-Mail (*)'
                                },
                                {
                                    xtype: 'textareafield',
                                    label: 'Nachricht'
                                }
                            ]
                        },
                        {
                            xtype: 'button',
                            text: 'Senden',
                            ui: 'confirm',
                            handler: function() {
                                this.up('formpanel').submit();
                            }
                        }
                    ]
                }
            ]
        });
    }
});