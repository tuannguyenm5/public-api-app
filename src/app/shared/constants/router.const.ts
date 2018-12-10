export const ROUTER = {
  notFound: {
    path: '404',
    link: '/404',
    name: 'Not Found',
    data: {
      title: 'Not Found'
    }
  },
  dashBoard: {
    pathModule: '',
    link: '/dashboard',
    path: 'dashboard',
    name: 'Dashboard',
    data: {
      title: 'Dashboard'
    }
  },
  cats: {
    pathModule: 'cats',
    nameModule: 'Cats',
    linkModule: '/cats',
    list: {
      path: 'list',
      link: '/cats/list',
      name: 'List Cats Detail',
      data: {
        title: 'List Cats Detail'
      },
    },
    detail: {
      path: 'detail/:id',
      link: '/cats/detail',
      name: 'Cat Detail',
      data: {
        title: 'Cat Detail'
      }
    },
    new: {
      path: 'new',
      link: '/cats/new',
      name: 'Create Cat Detail',
      data: {
        title: 'Create Cat Detail'
      }
    }
  }
};
