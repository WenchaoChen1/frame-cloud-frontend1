import { request } from '@umijs/max';

// Account - list
export async function getAccountList(params: API.PageParams) {
  return request<API.AccountResponseDataType>('/api/gstdev-system/v1/account/get-account-page', {
    method: 'GET',
    params: {
      pageNumber: params.current,
      pageSize: params.pageSize
    }
  });
}

export async function createAccount(data?: any) {
  return request<API.AccountResponseDataType>('/api/gstdev-system/v1/account/insert-account-initialization', {
    method: 'POST',
    data: data,
  });
}

export async function editAccount(data?: any) {
  return request<API.AccountResponseDataType>('/api/gstdev-system/v1/account', {
    method: 'PUT',
    data: data,
  });
}

export async function deleteAccount(id: string) {
  return request<Record<string, any>>('/api/gstdev-system/v1/account', {
    method: 'DELETE',
    params: {id: id}
  });
}

export async function getAccountInfo(id: string) {
  return request<API.AccountDetailResponseDataType>('/api/gstdev-system/v1/account/get-by-id', {
    method: 'GET',
    params: {id: id}
  });
}

export async function getAccountListInLogin() {
  return request<API.AccountListResponseDataType>('/api/gstdev-system/v1/user/get-by-id-to-account', {
    method: 'GET',
  });
}
