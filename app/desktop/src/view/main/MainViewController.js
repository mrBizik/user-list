/**
 * ViewController основного представления приложения
 */
Ext.define('UserList.view.main.MainViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.mainviewcontroller',

  addUserHandler: function () {
    const window = Ext.create('UserList.components.user.edit.Window', {
      submitButtonText: 'Add',
      title: 'Add new user',
      listeners: {
        submit: (user) => {
          this.addUser(user);
          window.close();
        },
      },
    });

    window.show();
  },

  editUserHandler: function (grid, rowIndex) {
    const store = this.getStore('users');
    const user = store.getAt(rowIndex);
    if (user) {
      const window = Ext.create('UserList.components.user.edit.Window', {
        user: user.clone(),
        submitButtonText: 'Edit',
        title: `Edit ${user.get('firstName')} ${user.get('lastName')}`,
        listeners: {
          submit: (user) => {
            this.editUser(user);
            window.close();
          },
        },
      });
  
      window.show();
    }
  },

  removeUserHandler: function (grid, rowIndex) {
    const store = this.getStore('users');
    const user = store.getAt(rowIndex);
    this.removeUser(user);
  },

  privates: {
    addUser: function (user) {
      const store = this.getStore('users');
      store.add(user);
    },

    editUser: function (newUser) {
      const store = this.getStore('users');
      const user = store.getById(newUser.getId());
      if (user) {
        user.set(newUser.getData());
      }
    },

    removeUser: function (user) {
      const store = this.getStore('users');
      store.remove(user);
    }
  },
});
