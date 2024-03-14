import { request } from '@umijs/max';

export async function getCustomerList(
  params?: {
    current?: number;
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.CustomerResponseDataType>('/api/gstdev-tenant/v1/tenant/get-all-customer', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

export async function createCustomer(data?: any) {
  return request<API.CustomerDetailResponseDataType>('/api/gstdev-tenant/v1/tenant/insert-customer', {
    method: 'POST',
    data: data,
  });
}

export async function updateCustomer(data?: any) {
  return request<API.CustomerDetailResponseDataType>('/api/gstdev-tenant/v1/tenant/update-customer', {
    method: 'PUT',
    data: data,
  });
}

export async function deleteCustomer(id: string) {
  return request<Record<string, any>>('/api/gstdev-tenant/v1/tenant/delete-customer', {
    method: 'DELETE',
    params: {
      id: id
    }
  });
}

export async function getCustomerInfoById(tenantId: string) {
  return request<API.CustomerDetailResponseDataType>('/api/gstdev-tenant/v1/tenant/get-customer', {
    method: 'GET',
    params: {
      id: tenantId
    }
  });
}

export async function getUserList(
  params?: {
    tenantId?: string;
    current?: number;
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.CustomerUserResponseDataType>('/api/gstdev-system/v1/user/get-all-customer-user', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

export async function createUser(data: API.userBodyParamsDataType) {
  return request<API.CustomerUserResponseDataType>('/api/gstdev-system/v1/user/insert-customer-user', {
    method: 'POST',
    data: data,
  });
}

export async function updateUser(data: API.userBodyParamsDataType) {
  return request<API.CustomerUserResponseDataType>('/api/gstdev-system/v1/user/update-customer-user', {
    method: 'PUT',
    data: data,
  });
}

export async function updateUserProfile(data: API.userBodyParamsDataType) {
  return request<API.CustomerUserResponseDataType>('/api/gstdev-system/v1/user/update-customer-user-profile', {
    method: 'POST',
    data: data,
  });
}

export async function deleteUser(id: string) {
  return request<Record<string, any>>('/api/gstdev-system/v1/user/delete-customer-user', {
    method: 'DELETE',
    params: {
      id: id
    }
  });
}

export async function getUserInfoById(id: string) {
  return request<API.CustomerUserDetailResponseDataType>('/api/gstdev-system/v1/user/get-customer-user-by-id', {
    method: 'GET',
    params: {
      id: id
    }
  });
}
