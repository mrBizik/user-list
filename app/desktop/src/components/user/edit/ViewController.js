/**
 * ViewController окна добавления/редактирования пользователя
 */
Ext.define('UserList.components.user.edit.ViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.components.user.edit',

  initViewModel: function (vm) {
    const user = this.getView().getUser();
    if (user) {
      vm.set('user', user);
    }
  },

  /**
   * Обработчик нажатия кнопки submit-button
   */
  submitForm: function () {
    const form = this.lookup('form');
    if (form.isValid()) {
      const user = this.getViewModel().get('user');
      this.getView().fireEvent('submit', user);
    }
  },


  /**
   * Обработчик нажатия кнопки закрытия
   */
  closeWindow: function () {
    this.getView().close();
  },

  /**
   * Слушатель события изменеия валидности формы
   * @param {Ext.form.Panel} form 
   * @param {boolean} valid 
   */
  onFormValidityChange: function (form, valid) {
    this.getViewModel().set('isValid', valid);
  },
});
