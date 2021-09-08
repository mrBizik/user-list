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
              text: 'Add',
              handler: 'addUserHandler',
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
          text: '#',
        },
        {
          dataIndex: 'firstName',
          text: 'First name',
          filter: 'string',
          flex: 3,
        },
        {
          dataIndex: 'lastName',
          text: 'Last name',
          filter: 'string',
          flex: 3,
        },
        {
          dataIndex: 'age',
          text: 'Age',
          filter: 'number',
        },
        {
          xtype: 'templatecolumn',
          text: 'Initials',
          dataIndex: 'firstName',
          flex: 5,
          filter: 'string',
          tpl: new Ext.XTemplate(
            '{[this.shortland(values.firstName)]}. {[this.shortland(values.lastName)]}. - {email}',
            {
              shortland: val => (val || '').charAt(0).toUpperCase(),
            },
          ),
        },
        {
          xtype:'actioncolumn',
          text: 'Actions',
          align: 'center',
          items: [
            {
              iconCls: 'x-fa fa-pen',
              tooltip: 'Edit',
              handler: 'editUserHandler',
            },
            '->',
            {
              iconCls: 'x-fa fa-trash',
              tooltip: 'Delete',
              handler: 'removeUserHandler',
            },
          ],
        },
      ],
    },
  ],
});
