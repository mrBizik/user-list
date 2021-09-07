Ext.define('UserList.components.user.edit.ViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.components.user.edit',

  initViewModel: function (vm) {
    const user = this.getView().getUser();
    if (user) {
      vm.set('user', user);
    }
  },

  submitForm: function () {
    const form = this.lookup('form');
    if (form.isValid()) {
      const user = this.getViewModel().get('user');
      this.getView().fireEvent('submit', user);
    }
  },

  closeWindow: function () {
    this.getView().close();
  },
});
