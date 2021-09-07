Ext.define('UserList.view.main.MainViewModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.mainviewmodel',
  stores: {
    users: {
      type: 'users',
      autoLoad: true,
    },
  },
});
