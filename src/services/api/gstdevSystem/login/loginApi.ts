import { request } from '@umijs/max';

// login get token
export async function oauth2Token(params: API.Oauth2TokenParamsDataType) {
  return request<API.Oauth2TokenResultDataType>('/api/gstdev-identity/oauth2/token', {
    method: 'POST',
    headers: {
      Authorization: 'Basic cGFzc3dvcmQtY2xpZW50OjEyMzQ1Ng=='
    },
    params: params,
  }).then((response: any) => {
    return response;
  }).catch(function(error) {
    console.log('/oauth2/token catch error', error);
    return error;
  });
}

export async function getLoginInfo(data: API.GetAccountInfoBody) {
  return request<{
    data: API.CurrentUser;
  }>('/api/gstdev-system/current-login-information/add-by-token-current-login-information', {
    method: 'POST',
    data: data,
    options: {skipErrorHandler: true}
  });
}

export async function forgotPassword(data: API.ForgotPasswordDataType, options?: { [key: string]: any }) {
  return request<API.ForgotPasswordResponseDataType>('/api/gstdev-system/v1/user/update-customer-user-password', {
    method: 'POST',
    data: data,
    options: options
  });
}

export async function loginLog() {
  return request<API.ResponseDataType>('/api/gstdev-system/current-login-information/log-in ', {method: 'POST'});
}

export async function logOutLog() {
  return request<API.ResponseDataType>('/api/gstdev-system/current-login-information/log-out ', {method: 'POST'});
}
