/**
 * Модель пользователя
 */
Ext.define('UserList.model.User', {
  extend: 'Ext.data.Model',
  requires: ['Ext.data.identifier.Uuid'],
  identifier: {
    type: 'uuid',
    id: 'guid',
  },
  idProperty: 'guid',
  fields: [
    {
      name: 'age',
      type: 'integer',
      validators: [
        {
          type: 'presence'
        },
        {
          type: 'range',
          min: 1,
        },
      ],
    },
    {
      name: 'firstName',
      type: 'string',
      mapping: (data) => data.name.first,
      validators: ['presence'],
    },
    {
      name: 'lastName',
      type: 'string',
      mapping: (data) => data.name.last,
      validators: ['presence'],
    },
    {
      name: 'email',
      type: 'string',
      validators: ['presence', 'email'],
    },
  ],

  proxy: {
    type: 'ajax',
    url: '/resources/desktop/mates.json',
    reader: {
      type: 'json',
    },
  },
});
