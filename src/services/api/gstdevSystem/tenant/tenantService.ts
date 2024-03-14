import {
  batchDeleteTenant,
  deleteTenant,
  findAllMenuTreeByTenant, findSelectedMenuByTenant,
  getChildrenByTenantId,
  getTenantTree,
  insertTenant, onSaveMenuInTenant,
  updateTenant,
} from '@/services/api/gstdevSystem/tenant/tenantApi';

// tenant - list
export async function getTenantTreeService() {
  return await getTenantTree();
}

export async function insertTenantService(data?: any) {
  return await insertTenant(data);
}

export async function updateTenantService(data?: any) {
  return await updateTenant(data);
}

export async function deleteTenantService(id: string) {
  return await deleteTenant(id);
}

export async function batchDeleteTenantService(params: any) {
  return await batchDeleteTenant(params);
}


//  get children tenant By tenantId
export async function getChildrenByTenantIdService(tenantId: string) {
  return await getChildrenByTenantId(tenantId);
}

//  get relation menu all tree By tenantId
export async function findAllMenuTreeByTenantService(tenantId: string) {
  return await findAllMenuTreeByTenant(tenantId);
}

// tenant - relation menu - get selected menu by role
export async function findSelectedMenuByTenantService(tenantId: string) {
  return await findSelectedMenuByTenant(tenantId);
}

// tenant - relation menu - save Selected Menu By Role
export async function onSaveMenuInTenantService(data: API.onSaveMenuInTenantDataType) {
  return await onSaveMenuInTenant(data);
}
