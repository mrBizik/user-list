Ext.define('UserList.components.user.edit.Window', {
  extend: 'Ext.window.Window',
  controller: 'components.user.edit',
  viewModel: {
    type: 'components.user.edit',
  },

  config: {
    user: null,
    submitButtonText: null,
  },


  defaultSubmitButtonText: 'Add',

  items: [
    {
      xtype: 'form',
      reference: 'form',
      items: [
        {
          xtype: 'textfield',
          label: 'First name',
          bind: {
            value: '{user.firstName}',
          },
        },
        {
          xtype: 'textfield',
          label: 'Second name',
          bind: {
            value: '{user.lastName}',
          },
        },
        {
          xtype: 'numberfield',
          label: 'Age',
          bind: {
            value: '{user.age}',
          },
        },
        {
          xtype: 'textfield',
          label: 'Email',
          bind: {
            value: '{user.email}',
          },
        },
      ],
    },
  ],

  buttons: [],

  updateSubmitButtonText: function (value) {
    const button = this.lookup('submit-button');
    if (button) {
      button.setText(value);
    }
  },

  initComponent: function () {
    const baseButtons = [
      {
        text: this.getSubmitButtonText() || this.defaultSubmitButtonText,
        reference: 'submit-button',
        handler: 'submitForm',
      },
      {
        close: 'Close',
        handler: 'closeWindow',
      },
    ];
    this.buttons = this.buttons.concat(baseButtons);
    this.callParent();
  },
});
