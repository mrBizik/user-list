/**
 * Окно добавления/редактирования пользователя
 * @fires submit
 */
Ext.define('UserList.components.user.edit.Window', {
  extend: 'Ext.window.Window',
  controller: 'components.user.edit',
  viewModel: {
    type: 'components.user.edit',
  },

  config: {
    /**
     * Редактируемый пользователь
     * если равно null, то создается новый пользователь
     * @type {UserList.model.User}
     */
    user: null,

    /**
     * Текст кнопки отправки данных
     * @type {string}
     */
    submitButtonText: null,
  },

  /**
   * Текст по-умолчанию кнопки отправки данных
   * @type {string}
   */
  defaultSubmitButtonText: UserList.Locales.create,

  width: 400,
  padding: 5,
  modal: true,
  items: [
    {
      xtype: 'form',
      reference: 'form',
      modelValidation: true,
      layout: 'form',
      listeners: {
        validitychange: 'onFormValidityChange'
      },
      items: [
        {
          xtype: 'textfield',
          fieldLabel: UserList.Locales.firstName,
          bind: {
            value: '{user.firstName}',
          },
        },
        {
          xtype: 'textfield',
          fieldLabel: UserList.Locales.lastName,
          bind: {
            value: '{user.lastName}',
          },
        },
        {
          xtype: 'numberfield',
          fieldLabel: UserList.Locales.age,
          bind: {
            value: '{user.age}',
          },
        },
        {
          xtype: 'textfield',
          fieldLabel: UserList.Locales.email,
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
        bind: {
          disabled: '{!isValid}',
        },
      },
      {
        text: UserList.Locales.close,
        handler: 'closeWindow',
      },
    ];
    this.buttons = this.buttons.concat(baseButtons);
    this.callParent();
  },
});
