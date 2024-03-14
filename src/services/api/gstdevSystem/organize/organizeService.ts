import {
  getOrganizeTree,
  createOrganize,
  editOrganize,
  deleteOrganize,
  getOrganizeInfo
} from '@/services/api/gstdevSystem/organize/organizeApi';
import {Key} from "react";

// list
export async function getOrganizeTreeService(tenantId: string) {
  return await getOrganizeTree(tenantId);
}

export async function createOrganizeService(data?: any) {
  return await createOrganize(data);
}

export async function editOrganizeService(data?: any) {
  return await editOrganize(data);
}

export async function deleteOrganizeService(id: string) {
  return await deleteOrganize(id);
}

export async function getOrganizeInfoService(id: Key) {
  return await getOrganizeInfo(id);
}
