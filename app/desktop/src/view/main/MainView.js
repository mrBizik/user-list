Ext.define('UserList.view.main.MainView', {
  extend: 'Ext.Container',
  xtype: 'mainview',
  controller: 'mainviewcontroller',
  viewModel: {
    type: 'mainviewmodel'
  },
  layout: {
    type: 'vbox',
    align: 'stretch',
  },
  defaults: {
    flex: 1,
  },
  items: [
    {
      xtype: 'grid',
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
      columns: [
        {
          xtype: 'rownumberer'
        },
        {
          dataIndex: 'firstName',
        },
        {
          dataIndex: 'lastName',
        },
        {
          dataIndex: 'age',
        },
        {
          xtype:'actioncolumn',
          items: [
            {
              iconCls: 'x-fa fa-pen',
              tooltip: 'Edit',
              handler: 'editUserHandler',
            },
            {
              icon: 'x-fa fa-minus',
              tooltip: 'Delete',
              handler: 'removeUserHandler',
            },
          ],
        },
      ],
    },
  ],
});
