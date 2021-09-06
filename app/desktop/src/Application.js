Ext.define('UserList.Application', {
  extend: 'Ext.app.Application',
  name: 'UserList',
  requires: ['UserList.*'],

  launch: function () {
    Ext.ariaWarn = Ext.emptyFn
    Ext.getBody().removeCls('launching')
    var elem = document.getElementById("splash")
    elem.parentNode.removeChild(elem)

    Ext.create({xtype: 'mainview', plugins: 'viewport'})
    
  },

  onAppUpdate: function () {
    Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
      function (choice) {
        if (choice === 'yes') {
          window.location.reload();
        }
      }
    );
  }
});
