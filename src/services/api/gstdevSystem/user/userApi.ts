import { request } from '@umijs/max';

// User - list - pagination
export async function getUserList(params: API.PageParams) {
  return request<API.UserResponseDataType>('/api/gstdev-system/v1/user/get-user-page', {
    method: 'GET',
    params: {
      pageNumber: params.current,
      pageSize: params.pageSize
    }
  });
}

export async function getAllUserList() {
  return request<API.AllUserResponseDataType>('/api/gstdev-system/v1/user/get-all-user', {
    method: 'GET'
  });
}

export async function createUser(data?: any) {
  return request<API.UserResponseDataType>('/api/gstdev-system/v1/user', {
    method: 'POST',
    data: data,
  });
}

export async function editUser(data?: any) {
  return request<API.UserResponseDataType>('/api/gstdev-system/v1/user', {
    method: 'PUT',
    data: data,
  });
}

export async function deleteUser(id: string) {
  return request<Record<string, any>>('/api/gstdev-system/v1/user', {
    method: 'DELETE',
    params: {id: id}
  });
}

export async function getUserInfo(id: string) {
  return request<Record<string, any>>('/api/gstdev-system/v1/user/get-by-id', {
    method: 'GET',
    params: {id: id}
  });
}
