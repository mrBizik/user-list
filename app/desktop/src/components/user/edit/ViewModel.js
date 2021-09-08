/**
 * ViewModel окна добавления/редактирования пользователя
 */
Ext.define('UserList.components.user.edit.ViewModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.components.user.edit',
  data: {
    /**
     * флаг валидности формы
     * @type {boolean}
     */
    isValid: false,
  },
  links: {
    /**
     * Редактируемый пользователь
     * @type {UserList.model.User}
     */
    user: {
      type: 'UserList.model.User',
      create: true,
    },
  },
});
