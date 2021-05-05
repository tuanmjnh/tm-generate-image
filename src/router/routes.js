// import fakeLayout from '@/layouts/fake-layout';

export const constant = [
  {
    path: '',
    redirect: 'dashboard',
    meta: { hidden: true, constant: true }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: { title: 'dashboard', icon: 'dashboard', constant: true },
    component: () => import('@/views/dashboard')
  },
  {
    path: '/generate',
    name: 'generate',
    meta: { title: 'generate', icon: 'generate', constant: true },
    component: () => import('@/views/generate')
  },
  {
    path: '/tesseract',
    name: 'tesseract',
    meta: { title: 'tesseract', icon: 'tesseract', constant: true },
    component: () => import('@/views/tesseract')
  },
  {
    path: '/youtube-video',
    name: 'youtube-video',
    meta: { title: 'youtube-video', icon: 'youtube-video', constant: true },
    component: () => import('@/views/youtube-video')
  }
];

export const dynamic = [
  {
    // path: '/product',
    // name: 'product',
    // redirect: 'product/list/view',
    // meta: { title: 'product', icon: 'perm_media' },
    // component: 'layout',
    // children: [
    //   {
    //     path: 'list',
    //     name: 'product-list',
    //     meta: { title: 'list', icon: 'collections' },
    //     component: 'layout',
    //     redirect: 'list/view',
    //     children: [
    //       {
    //         path: 'view',
    //         name: 'product-list-view',
    //         meta: {
    //           title: 'view',
    //           icon: 'list',
    //           hidden: true,
    //           noCache: true,
    //           flag: 1
    //         },
    //         component: 'products/index'
    //       },
    //       {
    //         path: 'add',
    //         name: 'product-list-add',
    //         meta: { title: 'add', icon: 'add', hidden: true },
    //         component: 'products/add'
    //       },
    //       {
    //         path: 'edit/:id?',
    //         name: 'product-list-edit',
    //         meta: {
    //           title: 'edit',
    //           icon: 'edit',
    //           hidden: true,
    //           noCache: true,
    //           activeMenu: '/product-list/view'
    //         },
    //         component: 'products/add'
    //       },
    //       {
    //         path: 'trash',
    //         name: 'product-list-trash',
    //         meta: {
    //           title: 'trash',
    //           icon: 'delete',
    //           hidden: true,
    //           noCache: true,
    //           flag: 0
    //         },
    //         component: 'products/index'
    //       }
    //     ]
    //   }
    // ]
  }
];

export const exception = [];
// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  constant.push({
    path: '*',
    name: '404',
    constant: true,
    meta: { title: 'error404', icon: '404', hidden: true },
    component: () => import('@/pages/error404')
  });
}

export default constant;
