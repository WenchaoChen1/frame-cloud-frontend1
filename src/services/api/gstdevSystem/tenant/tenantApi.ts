import { request } from '@umijs/max';

// tenant - list
export async function getTenantTree(
  params?: {
    current?: number;
    pageSize?: number;
  }
) {
  return request<API.TenantListResponseDataType>('/api/gstdev-system/v1/tenant/get-tenant-by-id-to-tree', {
    method: 'GET',
    params: params,
    // data: {}
  });
}

export async function insertTenant(data?: any) {
  return request<API.TenantListResponseDataType>('/api/gstdev-system/v1/tenant', {
    method: 'POST',
    data: data,
  });
}

export async function updateTenant(data?: any) {
  return request<API.TenantListResponseDataType>('/api/gstdev-system/v1/tenant', {
    method: 'PUT',
    data: data,
  });
}

export async function deleteTenant(id: string) {
  return request<Record<string, any>>('/api/gstdev-system/v1/tenant', {
    method: 'DELETE',
    params: {
      id: id,
    },
  });
}

export async function batchDeleteTenant(params: any) {
  return request<Record<string, any>>('/api/gstdev-system/tenant', {
    method: 'DELETE',
    params: params
  });
}


//  get children tenant By tenantId
export async function getChildrenByTenantId(tenantId: string) {
  return request<API.TenantListResponseDataType>('/api/gstdev-system/tenant/findByTenantId', {
    method: 'GET',
    params: {
      tenantId: tenantId
    }
  });
}

//  get relation menu all tree By tenantId
export async function findAllMenuTreeByTenant(tenantId: string) {
  return request<API.MenuListDataType>('/api/gstdev-system/v1/menu/get-all-mean-to-tree', {
    method: 'GET',
    params: {
      tenantId: tenantId
    }
  });
}

// tenant - relation menu - get selected menu by tenantId
export async function findSelectedMenuByTenant(tenantId: string) {
  return request<API.SelectedRelationMenuDataType>('/api/gstdev-system/v1/menu/get-all-tenant-menu-id', {
    method: 'GET',
    params: {
      tenantId: tenantId
    }
  });
}

// tenant - relation menu - save Selected Menu By tenantId
export async function onSaveMenuInTenant(data: API.onSaveMenuInTenantDataType) {
  return request<API.onSaveRelationMenuResponseDataType>('/api/gstdev-system/v1/rTenantMenu/insertTenantMenu', {
    method: 'POST',
    data: data
  });
}
