export default {
  routes: [
    {
      method: 'GET',
      path: '/categorias',
      handler: 'categoria.find',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/categorias/:id',
      handler: 'categoria.findOne',
      config: {
        policies: [],
      },
    },
    {
      method: 'POST',
      path: '/categorias',
      handler: 'categoria.create',
      config: {
        policies: [],
      },
    },
    {
      method: 'PUT',
      path: '/categorias/:id',
      handler: 'categoria.update',
      config: {
        policies: [],
      },
    },
    {
      method: 'DELETE',
      path: '/categorias/:id',
      handler: 'categoria.delete',
      config: {
        policies: [],
      },
    },
  ],
};
