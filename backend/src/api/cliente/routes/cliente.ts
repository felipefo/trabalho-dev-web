export default {
  routes: [
    {
      method: 'GET',
      path: '/clientes',
      handler: 'cliente.find',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/clientes/:id',
      handler: 'cliente.findOne',
      config: {
        policies: [],
      },
    },
    {
      method: 'POST',
      path: '/clientes',
      handler: 'cliente.create',
      config: {
        policies: [],
      },
    },
    {
      method: 'PUT',
      path: '/clientes/:id',
      handler: 'cliente.update',
      config: {
        policies: [],
      },
    },
    {
      method: 'DELETE',
      path: '/clientes/:id',
      handler: 'cliente.delete',
      config: {
        policies: [],
      },
    },
  ],
};
