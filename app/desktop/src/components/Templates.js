/**
 * Шаблоны
 */
Ext.define('UsetList.components.Templates', {
  alternateClassName: 'UserList.Templates',
  statics: {
    /**
     * Инициалы пользователя
     * @returns Ext.XTemplate
     */
    userInitials: () => new Ext.XTemplate(
      '{[this.shortland(values.firstName)]}. {[this.shortland(values.lastName)]}. - {email}',
      {
        shortland: val => (val || '').charAt(0).toUpperCase(),
      },
    ),
    
    /**
     * Аватар пользователя
     * @returns Ext.XTemplate
     */
    userAvatar: () => new Ext.XTemplate('<img src="{avatar.src}" alt="{avatar.alt}" height="32" width="32">'),
  },
});
