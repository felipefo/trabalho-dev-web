export default {
  routes: [
    {
      method: 'GET',
      path: '/enderecos',
      handler: 'endereco.find',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/enderecos/:id',
      handler: 'endereco.findOne',
      config: {
        policies: [],
      },
    },
    {
      method: 'POST',
      path: '/enderecos',
      handler: 'endereco.create',
      config: {
        policies: [],
      },
    },
    {
      method: 'PUT',
      path: '/enderecos/:id',
      handler: 'endereco.update',
      config: {
        policies: [],
      },
    },
    {
      method: 'DELETE',
      path: '/enderecos/:id',
      handler: 'endereco.delete',
      config: {
        policies: [],
      },
    },
  ],
};
