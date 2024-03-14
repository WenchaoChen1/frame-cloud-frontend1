import { request } from '@umijs/max';

// menu - list
export async function getMenuTree(
  params?: {
    current?: number;
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.MenuListDataType>('/api/gstdev-system/v1/menu/get-all-mean-to-tree', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

export async function createMenu(data?: any) {
  return request<API.TenantListResponseDataType>('/api/gstdev-system/v1/menu', {
    method: 'POST',
    data: data,
  });
}

export async function editMenu(data?: any) {
  return request<API.TenantListResponseDataType>('/api/gstdev-system/v1/menu', {
    method: 'PUT',
    data: data,
  });
}

export async function deleteMenu(id: string) {
  return request<Record<string, any>>('/api/gstdev-system/v1/menu', {
    method: 'DELETE',
    params: {
      id: id,
    },
  });
}

export async function moveMenu(data: API.moveMenuDataType) {
  return request<Record<string, any>>('/api/gstdev-system/menu/move', {
    method: 'PUT',
    data: data
  });
}
