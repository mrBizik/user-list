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
      columns: [
        {
          xtype: 'rownumberer',
          text: '#',
        },
        {
          dataIndex: 'firstName',
          text: 'First name',
          filter: 'string',
        },
        {
          dataIndex: 'lastName',
          text: 'Last name',
          filter: 'string',
        },
        {
          dataIndex: 'age',
          text: 'Age',
          filter: 'number',
        },
        {
          xtype:'actioncolumn',
          text: 'Actions',
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
