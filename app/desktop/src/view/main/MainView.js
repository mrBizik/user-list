/**
 * Основное представление приложения
 */
Ext.define('UserList.view.main.MainView', {
  extend: 'Ext.Container',
  xtype: 'mainview',
  controller: 'mainviewcontroller',
  viewModel: {
    type: 'mainviewmodel'
  },
  layout: 'fit',
  items: [
    {
      xtype: 'grid',
      plugins: {
        gridfilters: true,
      },
      dockedItems: [
        {
          xtype: 'toolbar',
          dock: 'bottom',
          items: [
            {
              text: UserList.Locales.create,
              handler: 'createUserHandler',
            },
          ],
        }
      ],
      bind: {
        store: '{users}',
      },
      defaults: {
        flex: 1,
      },
      columns: [
        {
          xtype: 'rownumberer',
          align: 'center',
        },
        {
          xtype: 'templatecolumn',
          text: UserList.Locales.avatar,
          align: 'center',
          sortable: false,
          tpl: UserList.Templates.userAvatar().apply({
            avatar: {
              src: '/resources/desktop/User.png',
              alt: 'Avatar',
            },
          }),
        },
        {
          dataIndex: 'firstName',
          text: UserList.Locales.firstName,
          filter: 'string',
          flex: 3,
        },
        {
          dataIndex: 'lastName',
          text: UserList.Locales.lastName,
          filter: 'string',
          flex: 3,
        },
        {
          dataIndex: 'age',
          text: UserList.Locales.age,
          filter: 'number',
        },
        {
          xtype: 'templatecolumn',
          text: UserList.Locales.initials,
          flex: 5,
          tpl: UserList.Templates.userInitials(),
        },
        {
          xtype:'actioncolumn',
          text: UserList.Locales.actions,
          align: 'center',
          items: [
            {
              iconCls: 'x-fa fa-pen',
              tooltip: UserList.Locales.edit,
              handler: 'editUserHandler',
            },
            '->',
            {
              iconCls: 'x-fa fa-trash',
              tooltip: UserList.Locales.delete,
              handler: 'removeUserHandler',
            },
          ],
        },
      ],
    },
  ],
});
