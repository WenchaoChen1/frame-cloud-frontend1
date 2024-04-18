import React from 'react';
import {ConfigProvider} from "antd";
import en_US from 'antd/es/locale/en_US';
import {ProLayoutProps} from '@ant-design/pro-components';
import Footer from '@/components/Footer';
import type {RunTimeLayoutConfig} from '@umijs/max';
import {history} from '@umijs/max';
import {MenuDataItem} from '@umijs/route-utils';
import defaultSettings from '../config/defaultSettings';
import {errorConfig} from './requestErrorConfig';
import {getLoginInfoService} from '@/services/api/gstdevSystem/login/loginService';
import HeaderContentRender from "@/components/RightContent/headerContentRender";
import {icon} from './pages/common/icon';
import {getLocalStorage, getToken, removeToken} from '@/utils/utils';
import {SITE_TITLE, LOGIN_PATH, CURRENT_ACCOUNT_ID} from "@/pages/common/constant";
import menuStyles from "@/components/Menu/index.less";
import commonStyle from '@/pages/common/index.less';
import styles from '@/components/RightContent/index.less';

// const isDev = process.env.NODE_ENV === 'development';

const handleAdminPermission = (currentUser: API.CurrentUser, permission: string[]) => {
    // admin
    if (currentUser?.accountType === '1') {
      // platform level of admin
      if (currentUser?.tenant?.type === 1) {
        // platform level, admin
        // return permission.concat([
        //   '/settings',
        //   '/settings/users',
        //   '/settings/users/editPermissions',
        // ]);

        const deletePermission = [
          '/settings/accountInfo',
          '/settings/paymentRails/index',
          '/dashboard',
          '/customer/index',
          '/payees/index',
          '/invoice',
          '/sms',
          '/payment',
          '/audit',
          '/customer/index',
          '/customer/add',
          '/payees/index',
          '/payees/customer',
          '/payees/list',
          '/invoice/index',
          '/invoice/add',
          '/analytics',
        ];
        deletePermission.map((item: string) => {
          const index = permission.indexOf(item);
          if (index >= 0) {
            permission.splice(index, 1);
          }
          return item;
        });
      }

      // customer level of admin
      // if (currentUser?.tenant?.type === 2) {
      //   return permission.concat([
      //     '/settings',
      //     '/settings/users',
      //     '/settings/users/editPermissions',
      //     '/settings/accountInfo',
      //     '/settings/paymentRails/index',
      //   ]);
      // }
  } else {
      // normal user
      const deletePermission = [
        // '/settings',
        '/settings/users',
        '/settings/users/editPermissions',
        '/settings/accountInfo',
        '/settings/paymentRails/index',

        '/dashboard',
        '/customer/index',
        '/payees/index',
        '/invoice',
        '/sms',
        '/payment',
        '/audit',
        '/customer/index',
        '/customer/add',
        '/payees/index',
        '/payees/customer',
        '/payees/list',
        '/invoice/index',
        '/invoice/add',
        '/analytics',
      ];
      deletePermission.map((item: string) => {
        const index = permission.indexOf(item);
        if (index >= 0) {
          permission.splice(index, 1);
        }
        return null;
      });
  }

  return permission;
}

let redirect = '';
const handleRouteTree = (data: API.RouteTreeItemDataType[]) => {
  let permission: string[] = [];
  const dynamicRouteTree: API.MenuTreeItemDataType[] = [];

  data.map((item: API.RouteTreeItemDataType) => {
    // filter menu
    const deleteMenu = [
      '/settings',
      '/settings/users',
      '/settings/users/profile',
      '/settings/users/editPermissions',
      '/settings/accountInfo',
      '/settings/paymentRails/index',

      '/dashboard',
      '/customer/index',
      '/payees/index',
      '/invoice',
      '/sms',
      '/payment',
      '/audit',
      '/customer/index',
      '/customer/add',
      '/payees/index',
      '/payees/customer',
      '/payees/list',
      '/invoice/index',
      '/invoice/add',
      '/analytics',
    ];
    const index = deleteMenu.indexOf(item.path);
    if (index >= 0) {
      return false;
    }

    const newItem: API.MenuTreeItemDataType = {
      name: item.code,
      path: item.path,
      icon: item.icon,
      // hideInMenu: item?.location === 1 ? false : true,
      hideInMenu: false,
    }

    permission.push(item.path);
    if (item?.children && item.children.length > 0) {
      const children = handleRouteTree(item.children);

      permission = permission.concat(children.permission);
      if (children.dynamicRouteTree.length > 0) {
        newItem.routes = children.dynamicRouteTree;
      }
    }
    dynamicRouteTree.push(newItem);

    // redirect is empty and menu no child, get first menu
    if (!redirect && (!newItem?.routes || newItem.routes.length === 0)) {
      redirect = item.path;
    }

    return null;
  });

  return {
    redirect: redirect,
    permission: permission,
    dynamicRouteTree: dynamicRouteTree
  };
}

interface getInitialStateDateType {
  settings?: ProLayoutProps;
  currentUser?: API.CurrentUser;
  loading?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser>;
}

export async function getInitialState(): Promise<getInitialStateDateType> {
  const fetchUserInfo = async () => {
    try {
      const currentAccountId = getLocalStorage(CURRENT_ACCOUNT_ID);
      const accountInfoResponse = await getLoginInfoService({currentAccountId: currentAccountId || ''});

      let currentUser = accountInfoResponse.data;
      if (currentUser) {
        // clean default redirect page
        redirect = '';
        const dynamicRouteTree = handleRouteTree(accountInfoResponse?.data?.currentLoginAccountUserPermissions || []);
        dynamicRouteTree.permission = handleAdminPermission(currentUser, dynamicRouteTree.permission);
        currentUser = {...currentUser, ...dynamicRouteTree};

        return currentUser;
      }
    } catch (error) {
      history.push(LOGIN_PATH);
    }

    return {};
  };

  if (window.location.pathname !== LOGIN_PATH && window.location.pathname !== '/') {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: defaultSettings,
    };
  }

  return {
    fetchUserInfo,
    settings: defaultSettings,
  };
}

// @ts-ignore
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  const headerTitleRender = () => {
    return (
      <div className={styles.headerTitleBox}>
        <img src={icon.titleLogo} className={styles.headerTitleLogo} alt="logo" />
      </div>
    );
  }

  const getMenuIcon = (key: string) => {
    const map: API.MenuIconDataType = {
      dashboard: icon.dashboard,
      customerAccounts: icon.customerAccounts,
      settings: icon.settings,
    }

    if (map[key]) {
      return map[key];
    } else {
      return map['dashboard'];
    }
  }

  const menuDataRender = (menuList: MenuDataItem[]): any => {
    return menuList.map((item: MenuDataItem) => {
      const localItem = {
        ...item,
        icon: <img className={menuStyles.menuIcon} src={getMenuIcon(item.icon)} />,
        children: item.children ? menuDataRender(item.children) : undefined,
      };

      // normal user, not show settings menu
      if (item.path === '/settings' && initialState?.currentUser?.accountType === '2') {
        localItem.hideInMenu = true;
      }

      return localItem as MenuDataItem;
    });
  };

  const headerRender = () => {
    return (
      <div className={commonStyle.justifyStart}>
        <HeaderContentRender />
      </div>
    );
  }

  return {
    menu: {
      // locale: false,
      params: {
        userId: initialState?.currentUser?.userId,
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      request: async (params: any, defaultMenuData: any) => {
        return defaultMenuData;
        // return initialState?.currentUser?.dynamicRouteTree;
      },
    },
    headerRender: () => headerRender(),
    pageTitleRender: () => SITE_TITLE,
    headerTitleRender: () => undefined,
    // headerContentRender: () => <HeaderContentRender />,
    // rightContentRender: () => <RightContent />,
    // menuHeaderRender: () => headerTitleRender(),
    menuHeaderRender: () => undefined,
    menuDataRender: menuDataRender,
    collapsedButtonRender: () => undefined,
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      // no login, redirect login
      if (!initialState?.currentUser && location.pathname !== LOGIN_PATH) {
        history.push(LOGIN_PATH);
      }
    },
    layoutBgImgList: [],
    defaultCollapsed: false,
    childrenRender: (children) => {
      // if (initialState?.loading) return <PageLoading />;
      return (
        <>
          <ConfigProvider locale={en_US}>
            {children}
            {/*<SettingDrawer*/}
            {/*  disableUrlParams*/}
            {/*  enableDarkTheme*/}
            {/*  settings={initialState?.settings}*/}
            {/*  onSettingChange={(settings) => {*/}
            {/*    setInitialState((preInitialState) => ({*/}
            {/*      ...preInitialState,*/}
            {/*      settings,*/}
            {/*    }));*/}
            {/*  }}*/}
            {/*/>*/}
          </ConfigProvider>
        </>
      );
    },
    ...initialState?.settings,
  };
};

const authHeaderInterceptor = (url: string, options: any) => {
  const filter = [
    '/api/gstdev-system/user/login',
    // login
    '/api/gstdev-identity/oauth2/token',
    '/api/gstdev-system/v1/user/update-customer-user-password',
  ];

  if (!filter.includes(url)) {
    const token = getToken();
    if (token) {
      options.headers.Authorization = `Bearer ${token}`;
    } else {
      console.log('authHeaderInterceptor token is empty', url, window.location.href);
      removeToken();
      return history.replace(LOGIN_PATH);
    }
  }

  return {
    url: url,
    options: { ...options, interceptors: true},
  };
};

/**
 * @doc https://umijs.org/docs/max/request
 */
export const request = {
  ...errorConfig,
  requestInterceptors: [authHeaderInterceptor]
};
