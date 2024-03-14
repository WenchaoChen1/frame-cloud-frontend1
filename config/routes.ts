/**
 * Routing configuration for @ name umi
 * @description only supports configuration of path, component, routes, redirect, wrappers, name, and icon
 * @param path only supports two types of placeholder configurations. The first is in the form of a dynamic parameter: id, and the second is the * wildcard character, which can only appear at the end of the routing string.
 * @param React component path used for rendering after matching the location and path of the @ param component configuration. It can be an absolute path or a relative path. If it is a relative path, it will start from src/pages.
 * @param routes configure sub routes, usually used when adding layout components to multiple paths.
 * @param redirect Configure Route Jump
 * @param wrappers configure the packaging components of the routing component, which can combine more functions for the current routing component. For example, it can be used for routing level permission verification
 * @param name: Configure the title of the route. By default, read the value of menu.xxxx in the internationalization file menu.ts. If the name is configured as login, read the value of menu.login in menu.ts as the title
 * @param icon is used to configure the routing icon, with reference to its values https://ant.design/components/icon-cn Please note to remove the style suffix and case. If you want to configure the icon as<StepBackwardOutlined/>, the value should be stepBackward or StepBackward. If you want to configure the icon as<UserOutlined/>, the value should be user or User
 * @doc https://umijs.org/docs/guides/routes
 */
export default [
  {
    path: '/login',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/login',
        component: './login/index',
      },
      {
        name: 'forgot',
        path: '/login/forgot',
        component: './login/forgot',
      },
      {
        name: 'selectAccount',
        path: '/login/selectAccount',
        component: './login/selectAccount',
      },
      {
        name: 'userInfo',
        path: '/login/userInfo',
        component: './login/userInfo',
      }
    ],
  },
  {
    name: 'welcome',
    path: '/welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    name: 'access.access-control',
    path: '/access',
    access: 'normalRouteFilter',
    icon: 'table',
    routes: [
      {
        name: 'tenant.tenant-list',
        icon: 'table',
        path: '/access/tenant',
        access: 'normalRouteFilter',
        component: './tenant',
      },
      {
        name: 'menu.menu-list',
        icon: 'table',
        path: '/access/menu',
        access: 'normalRouteFilter',
        component: './menu',
      },
      {
        name: 'organize.organize-list',
        icon: 'table',
        path: '/access/organize',
        access: 'normalRouteFilter',
        component: './organize',
      },
      {
        name: 'role.role-list',
        icon: 'table',
        path: '/access/role',
        access: 'normalRouteFilter',
        component: './role',
      },
      {
        name: 'account.account-list',
        icon: 'table',
        path: '/access/account',
        access: 'normalRouteFilter',
        component: './account',
      },
      {
        name: 'user.user-list',
        icon: 'table',
        path: '/access/user-list',
        access: 'normalRouteFilter',
        component: './user/index',
      },
      {
        name: 'dict.dict-list',
        icon: 'table',
        path: '/access/dict',
        access: 'normalRouteFilter',
        component: './dict',
      }
    ],
  },
  {
    path: '*',
    layout: false,
    component: './404',
  },
];
