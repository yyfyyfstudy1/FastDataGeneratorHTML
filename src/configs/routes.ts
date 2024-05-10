/**
 * 路由
 * 配置参考：https://umijs.org/docs/max/layout-menu#%E6%89%A9%E5%B1%95%E7%9A%84%E8%B7%AF%E7%94%B1%E9%85%8D%E7%BD%AE
 */
export default [
  {
    name: 'code generation',
    path: '/',
    component: 'index',
  },
  {
    name: 'Thesaurus',
    path: '/dict/all',
    component: 'dict',
  },
  {
    name: 'Complete list of tables',
    path: '/table/all',
    component: 'tableInfo',
  },
  {
    name: '字段大全',
    path: '/field/all',
    component: 'fieldInfo',
  },
  {
    name: 'add',
    path: '/dict/add',
    component: 'dict/add',
    wrappers: [
      '@/wrappers/auth',
    ],
  },
  {
    name: 'add_result',
    path: '/dict/add_result',
    component: 'dict/add_result',
    hideInMenu: true,
    wrappers: [
      '@/wrappers/auth',
    ],
  },
  {
    path: '/user',
    hideInMenu: true,
    headerRender: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: 'user/login',
      },
      {
        name: 'register',
        path: '/user/register',
        component: 'user/register',
      },
    ],
  },
  {
    path: '/admin',
    access: 'canAdmin',
    name: '管理',
    // flatMenu: true,
    routes: [
      {
        name: '用户管理',
        path: '/admin/user',
        component: 'admin/user',
      },
      {
        name: '词库管理',
        path: '/admin/dict',
        component: 'admin/dict',
      },
      {
        name: '表管理',
        path: '/admin/table',
        component: 'admin/tableInfo',
      },
      {
        name: '字段管理',
        path: '/admin/field',
        component: 'admin/fieldInfo',
      },
      {
        name: '举报管理',
        path: '/admin/report',
        component: 'admin/report',
      },
    ],
  },
];

// e.g.
// export const routes: IBestAFSRoute[] = [
//   {
//     path: '/welcome',
//     component: 'IndexPage',
//     name: '欢迎', // 兼容此写法
//     icon: 'testicon',
//     // 更多功能查看
//     // https://beta-pro.ant.design/docs/advanced-menu
//     // ---
//     // 新页面打开
//     target: '_blank',
//     // 不展示顶栏
//     headerRender: false,
//     // 不展示页脚
//     footerRender: false,
//     // 不展示菜单
//     menuRender: false,
//     // 不展示菜单顶栏
//     menuHeaderRender: false,
//     // 权限配置，需要与 plugin-access 插件配合使用
//     access: 'canRead',
//     // 隐藏子菜单
//     hideChildrenInMenu: true,
//     // 隐藏自己和子菜单
//     hideInMenu: true,
//     // 在面包屑中隐藏
//     hideInBreadcrumb: true,
//     // 子项往上提，仍旧展示,
//     flatMenu: true,
//   },
// ];
