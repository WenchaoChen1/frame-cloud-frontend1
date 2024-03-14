declare namespace API {

  type CurrentUser = {
    accountId?: string;
    accountType?: string;
    tenantId?: string;
    userId?: string;
    currentLoginAccount?: {
      id?: string;
      userid?: string;
      name?: string;
      avatar?: string;
      createdAt?: string;
      createdBy?: string;
      updatedAt?: string;
      updatedBy?: string;
      deleted?: number,
      identity?: string;
      tenantId?: string;
      userId?: string;
      mirrorTenantId?: string;
      user?: {
        updatedBy?: string;
        gender?: number;
        mobile?: string;
        avatar?: string;
        createdAt?: string;
        password?: string;
        deleted?: number;
        createdBy?: string;
        id?: string;
        email?: string;
        updatedAt?: string;
        username?: string;
      }
    };
    currentLoginAccountUserPermissions?: API.RouteTreeItemDataType[];
    tenant?: {
      id?: string;
      parentId?: string;
      status?: number;
      type?: number;
      tenantCode?: string;
      tenantName?: string;
      description?: string;
      updatedBy?: string;
      createdAt?: string;
      createdBy?: string;
    },

    redirect?: string;
    permission?: string[];
    dynamicRouteTree?: API.MenuTreeItemDataType[];
  };

  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  type GetAccountInfoBody = {
    currentAccountId?: string;
  }

  type ResponseDataType = {
    code?: string;
    success?: boolean;
    message?: string;
    data?: any;
  }

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type LoginParams = {
    username?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
  };

  type MenuTreeItemDataType = {
    name: string;
    path: string;
    icon?: string;
    hideInMenu?: boolean;
    routes?: MenuTreeItemDataType[];
  }

  type RouteTreeItemDataType = {
    id?: string;
    name: string;
    code: string;
    path: string;
    location: number;
    icon?: string;
    parentId?: string;
    children?: RouteTreeItemDataType[];
    url?: string;
    icon?: string;
    path?: string;
    permission?: string;
    type?: number;
    hidden?: number;
    status?: number;
    tenantEnable?: number;
    sort?: number;
    description?: string;
    deleted?: number;
    createdAt?: string;
    createdBy?: string;
    updatedAt?: string;
    updatedBy?: string;
  }

  type TenantItemDataType = {
    id?: string;
    tenantName?: string;
    description?: string;
    status?: number;
    type?: number;
    parentId?: string;
    tenantCode?: string;
    createdAt?: string;
    createdBy?: string;
    updatedAt?: string;
    updatedBy?: string;
    children?: TenantItemDataType[];
  };

  type TenantListResponseDataType = {
    data?: TenantItemDataType[];
    code?: string;
    success?: boolean;
    message?: string;
  };

  type onSaveMenuInTenantDataType = {
    tenantId: string;
    menuIds: React.Key[];
  }

  type onSaveRelationMenuResponseDataType = {
    code?: string;
    data?: any
    success?: boolean;
    message?: string;
  };

  type onSaveMenuInRoleDataType = {
    roleId: string;
    checkedMenuId: React.Key[];
    halfCheckedMenuId: React.Key[];
  }

  type moveMenuDataType = {
    id: string|undefined;
    moveOperation: string;
  }

  type MenuListItemDataType = {
    id?: string;
    parentId?: string;
    name?: string;
    parentName?: string;
    code?: string;
    path?: string;
    location?: number;
    description?: string;
    sort?: number;
    status?: number;
    type?: number;
    hidden?: number;
    usageType?: number;
    platformUse?: number;
    icon?: string;
    url?: string;
    permission?: string;
    tenantEnable?: number;
    createdAt?: string;
    createdBy?: string;
    updatedAt?: string;
    updatedBy?: string;
    children?: MenuListItemDataType[];
    checked?: number;
    checkedMenuId?: string[];
    halfCheckedMenuId?: string[];
  };

  type MenuListDataType = {
    total?: number;
    success?: boolean;
    data?: MenuListItemDataType[];
  };

  type MenuIconDataType = {
    [key: string]: string;
  };

  type SelectedRelationMenuDataType = {
    total?: number;
    success?: boolean;
    data?: MenuListItemDataType;
  };

  type DictItemDataType = {
    id?: string;
    name?: string;
    key: string;
    parentId?: string;
    tenantId?: string;
    code?: string;
    status?: number,
    sort?: number,
    description?: string;
    createdAt?: string;
    createdBy?: string;
    updatedAt?: string;
    updatedBy?: string;
    children?: DictItemDataType[];
  };

  type DictListResponseDataType = {
    code?: string;
    success?: boolean;
    message?: string;
    data?: DictItemDataType[];
  };

  type OrganizeListItemDataType = {
    id?: string;
    key: string;
    tenantId?: string;
    parentId?: string;
    name?: string;
    code?: string;
    shortName?: string;
    status?: number;
    sort?: number;
    description?: string;
    createdAt?: string;
    createdBy?: string;
    updatedAt?: string;
    updatedBy?: string;
    children?: OrganizeListItemDataType[];
  };

  type OrganizeListResponseDataType = {
    success?: boolean;
    code?: string;
    message?: string;
    data?: OrganizeListItemDataType[];
  };

  type OrganizeInfoResponseDataType = {
    success?: boolean;
    code?: string;
    message?: string;
    data?: OrganizeListItemDataType;
  };

  type RoleItemDataType = {
    id?: string;
    roleName?: string;
    parentId?: string;
    code?: string;
    status?: number,
    sort?: number,
    description?: string;
    createdAt?: string;
    createdBy?: string;
    updatedAt?: string;
    updatedBy?: string;
  };

  type RoleDetailResponseDataType = {
    data?: RoleItemDataType;
    code?: string;
    success?: boolean;
    message?: string;
  };

  type RoleResponseDataType = {
    data?: RoleItemDataType[];
    code?: string;
    success?: boolean;
    message?: string;
  };

  type RoleByTenantIdResponseDataType = {
    data?: RoleItemDataType[];
    code?: string;
    success?: boolean;
    message?: string;
  };

  type UserItemDataType = {
    id?: string;
    username?: string;
    mobile?: string;
    email?: string,
    gender?: number,
    avatar?: string;
    status?: number,
    lastLoginTime?: string,
    description?: string;
    createdAt?: string;
    createdBy?: string;
    updatedAt?: string;
    updatedBy?: string;
  };

  type UserResponseListDataType = {
    content?: UserItemDataType[];
    totalElements?: number;
  }

  type UserResponseDataType = {
    data?: UserResponseListDataType;
    code?: string;
    success?: boolean;
    message?: string;
  };

  type AllUserResponseDataType = {
    data?: UserItemDataType[];
    code?: string;
    success?: boolean;
    message?: string;
  };

  type AccountItemDataType = {
    id?: string;
    identity?: string;
    name?: string;
    type?: string;
    accountTypeConstants?: string;
    email?: string;
    tenantId?: string;
    role?: string;
    user?: UserItemDataType;
    createdAt?: string;
    createdBy?: string;
    updatedAt?: string;
    updatedBy?: string;
  };

  type AccountResponseListDataType = {
    content?: AccountItemDataType[];
    totalElements?: number;
  }

  type AccountResponseDataType = {
    data?: AccountResponseListDataType;
    code?: string;
    success?: boolean;
    message?: string;
  };

  type AccountListResponseDataType = {
    data?: AccountItemDataType[];
    code?: string;
    success?: boolean;
    message?: string;
  };

  type AccountDetailResponseDataType = {
    data?: AccountItemDataType;
    code?: string;
    success?: boolean;
    message?: string;
  };

  type ForgotPasswordDataType = {
    email?: string;
  }

  type ForgotPasswordResponseDataType = {
    code?: string;
    data?: any;
    success?: boolean;
    message?: string;
  };

  type Oauth2TokenParamsDataType = {
    grant_type: 'password'|'refresh_token';
    refresh_token?: string;
    username?: string;
    password?: string;
    rememberMe?: boolean;
    type?: string;
  };

  type Oauth2TokenResultDataType = {
    access_token: string;
    refresh_token: string;
    token_type: string;
    expires_in: string;
  };

  type UserLoginBodyDataType = {
    username?: string;
    password?: string;
    rememberMe?: boolean;
  };

  type ErrorResponse = {
    errorCode: string;
    errorMessage?: string;
    success?: boolean;
  };

  // ###################### 2023-08-21 ##################

  type RoleTableSearchParams = {
    current?: number;
    pageSize?: number;
    status?: string;
    roleName?: string;
    tenantId?: string;
  };

}
