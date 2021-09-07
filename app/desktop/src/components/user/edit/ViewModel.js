Ext.define('UserList.components.user.edit.ViewModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.components.user.edit',
  links: {
    user: {
      type: 'UserList.model.User',
      create: true,
    },
  },
  formulas: {
    test: get => console.log(get('user'))
  }
});
