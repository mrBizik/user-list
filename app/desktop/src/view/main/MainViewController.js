/**
 * ViewController основного представления приложения
 */
Ext.define('UserList.view.main.MainViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.mainviewcontroller',

  /**
   * Обработчик кнопки добавления нового пользователя
   */
  addUserHandler: function () {
    const window = Ext.create('UserList.components.user.edit.Window', {
      submitButtonText: 'Add',
      title: 'Add new user',
      autoShow: true,
      listeners: {
        submit: (user) => {
          this.addUser(user);
          window.close();
        },
      },
    });
  },

  /**
   * Обработчик нажатия конпки редактирования пользователя
   */
  editUserHandler: function (grid, rowIndex, colIndex, item, e, record) {
    const window = Ext.create('UserList.components.user.edit.Window', {
      user: record.clone(),
      submitButtonText: 'Edit',
      title: `Edit ${record.get('firstName')} ${record.get('lastName')}`,
      autoShow: true,
      listeners: {
        submit: (udpatedUser) => {
          this.editUser(udpatedUser);
          window.close();
        },
      },
    });
  },

  /**
   * Обработчик нажатия кнопки удаления пользователя
   */
  removeUserHandler: function (grid, rowIndex, colIndex, item, e, record) {
    this.removeUser(record);
  },

  privates: {
    /**
     * Добавить пользователя в users стор
     * @param {UserList.model.User} user 
     */
    addUser: function (user) {
      if (user) {
        const store = this.getStore('users');
        store.add(user);
      }
    },

    /**
     * Редактировать пользователя из users стора
     * @param {UserList.model.User} user 
     */
    editUser: function (newUser) {
      if (newUser) {
        const store = this.getStore('users');
        const user = store.getById(newUser.getId());
        if (user) {
          user.set(newUser.getData());
        }
      }
    },

    /**
     * Добавить пользователя из users стора
     * @param {UserList.model.User} user 
     */
    removeUser: function (user) {
      if (user) {
        const store = this.getStore('users');
        store.remove(user);
      }
    }
  },
});
