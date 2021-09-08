/**
 * Стор с пользователями
 */
Ext.define('UserList.store.Users', {
  extend: 'Ext.data.Store',
  alias: 'store.users',
  model: 'UserList.model.User',
});