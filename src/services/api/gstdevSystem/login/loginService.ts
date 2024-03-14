import {
  oauth2Token,
  getLoginInfo,
  forgotPassword,
  logOutLog
} from '@/services/api/gstdevSystem/login/loginApi';

export async function oauth2TokenService(params: API.Oauth2TokenParamsDataType) {
  return await oauth2Token(params);
}

export async function getLoginInfoService(data: API.GetAccountInfoBody) {
  return await getLoginInfo(data);
}

export async function forgotPasswordService(data: API.ForgotPasswordDataType) {
  return await forgotPassword(data);
}

export async function logOutLogService() {
  return await logOutLog();
}
