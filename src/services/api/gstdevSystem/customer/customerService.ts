import {
  getCustomerList,
  updateCustomer,
  deleteCustomer,
  createCustomer,
  getCustomerInfoById, getUserInfoById, deleteUser, updateUser, createUser, getUserList, updateUserProfile,
} from '@/services/api/gstdevSystem/customer/customerApi';

export async function getCustomerListService(
  params?: {
    current?: number;
    pageSize?: number;
  }
) {
  return await getCustomerList(params);
}

export async function createCustomerService(data?: any) {
  return await createCustomer(data);
}

export async function updateCustomerService(data?: any) {
  return await updateCustomer(data);
}

export async function deleteCustomerService(id: string) {
  return await deleteCustomer(id);
}

export async function getCustomerInfoByIdService(tenantId: string) {
  return await getCustomerInfoById(tenantId);
}

export async function getUserListService(
  params?: {
    tenantId?: string;
    current?: number;
    pageSize?: number;
  }
) {
  return await getUserList(params);
}

export async function createUserService(data?: any) {
  return await createUser(data);
}

export async function updateUserService(data?: any) {
  return await updateUser(data);
}

export async function updateUserProfileService(data?: any) {
  return await updateUserProfile(data);
}

export async function deleteUserService(id: string) {
  return await deleteUser(id);
}

export async function getUserInfoByIdService(tenantId: string) {
  return await getUserInfoById(tenantId);
}
