import { request } from '@umijs/max';

// Role - list
export async function getRoleList(params: API.RoleTableSearchParams) {
  return request<API.RoleResponseDataType>('/api/gstdev-system/v1/role/get-all-role-to-tree', {
    method: 'GET',
    params: params
  });
}

export async function insertRole(data?: any) {
  return request<API.RoleResponseDataType>('/api/gstdev-system/v1/role', {
    method: 'POST',
    data: data,
  });
}

export async function updateRole(data?: any) {
  return request<API.RoleResponseDataType>('/api/gstdev-system/v1/role', {
    method: 'PUT',
    data: data,
  });
}

export async function deleteRole(id: string) {
  return request<Record<string, any>>('/api/gstdev-system/v1/role', {
    method: 'DELETE',
    params: {id: id}
  });
}

export async function getRoleInfo(id: string) {
  return request<API.RoleDetailResponseDataType>('/api/gstdev-system/role', {
    method: 'GET',
    params: {id: id}
  });
}

export async function batchDeleteRole(params: any) {
  return request<Record<string, any>>('/api/gstdev-system/role', {
    method: 'DELETE',
    params: params
  });
}

export async function moveRole(data: API.moveMenuDataType) {
  return request<Record<string, any>>('/api/gstdev-system/role/move', {
    method: 'PUT',
    data: data
  });
}

// role - relation menu - get Selected Menu By Role
export async function findSelectedMenuByRole(roleId: string) {
  return request<API.SelectedRelationMenuDataType>('/api/gstdev-system/roleMenu/getRoleMenu', {
    method: 'GET',
    params: {
      roleId: roleId
    }
  });
}

// role - relation menu - save Selected Menu By Role
export async function onSaveMenuInRole(data: API.onSaveMenuInRoleDataType) {
  return request<API.onSaveRelationMenuResponseDataType>('/api/gstdev-system/roleMenu/batchSave', {
    method: 'POST',
    data: data,
  });
}

//  get role By tenantId
export async function getRoleByTenantId(tenantId: string) {
  return request<API.RoleByTenantIdResponseDataType>('/api/gstdev-system/role/findAll', {
    method: 'GET',
    params: {
      tenantId: tenantId
    }
  });
}
