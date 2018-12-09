export const ROUTER = {
  notFound: {
    path: '404',
    title: 'Not Found'
  },
  dashBoard: {
    path: '',
    title: 'Home'
  },
  cats: {
    index: {
      path: '',
      title: 'List Cats Detail',
      action: 'list'
    },
    detail: {
      path: '/detail/:id',
      title: 'Cat Detail',
      action: 'detail'
    },
    new: {
      path: '/new',
      title: 'Create Cat Detail',
      action: 'new'
    }
  }
};
