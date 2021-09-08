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
      validators: [
        {
          type: 'presence'
        },
      ],
    },
    {
      name: 'lastName',
      type: 'string',
      mapping: (data) => data.name.last,
    },
    {
      name: 'email',
      type: 'string',
      validators: [
        {
          type: 'presence'
        },
        {
          type: 'email',
        },
      ],
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
