Ext.define('UserList.components.user.edit.ViewModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.components.user.edit',
  data: {
    isValid: false,
  },
  links: {
    user: {
      type: 'UserList.model.User',
      create: true,
    },
  },
});
