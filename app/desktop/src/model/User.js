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
      name: 'guid',
      type: 'auto',
    },
    {
      name: 'age',
      type: 'integer',
    },
    {
      name: 'firstName',
      type: 'string',
      mapping: (data) => data.name.first,
    },
    {
      name: 'lastName',
      type: 'string',
      mapping: (data) => data.name.last,
    },
    {
      name: 'email',
      type: 'string',
    },
  ],

  proxy: {
    type: 'ajax',
    url: '/resources/desktop/mates.json',
    reader: {
      type: 'json',
      // transform: (data) => {

      // }
    },
  },
});
