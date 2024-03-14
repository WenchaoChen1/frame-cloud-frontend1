
declare namespace API {
  type ErrorResponse = {
    errorCode: string;
    errorMessage?: string;
    success?: boolean;
  };

  type LoginParams = {
    username?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
  };

  type LoginResponse = {
    code?: string;
    message?: string;
    success?: boolean;
    data?: {
      access_token?: string;
      expires_in?: number;
      refresh_token?: string;
      token_type?: string;
    };
  };

  type CurrentUserInfo = {
    accountId?: string;
    tenantId?: string;
    tenantIdSelf?: null;
    user?: {
      lastName?: string;
      avatar?: string;
      firstName?: string;
      id?: string;
      email?: string;
      username?: string;
      status?: number;
    };
    tenant?: string;
    currentLoginAccount?: string;
    currentLoginAccountUserPermissions?: string;
  }

  type GetUserInfoResponse = {
    success?: boolean;
    code?: string;
    message?: string;
    data?: CurrentUserInfo;
  };

}
