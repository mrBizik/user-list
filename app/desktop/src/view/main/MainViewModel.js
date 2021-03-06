/**
 * ViewModel основного представления приложения
 */
Ext.define('UserList.view.main.MainViewModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.mainviewmodel',
  stores: {
    /**
     * Список пользователей
     */
    users: {
      type: 'users',
      autoLoad: true,
    },
  },
});
