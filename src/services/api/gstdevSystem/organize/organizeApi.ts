import { request } from '@umijs/max';
import {Key} from "react";

// Organize - list
export async function getOrganizeTree(tenantId: string) {
  return request<API.OrganizeListResponseDataType>('/api/gstdev-system/v1/depart/get-all-depart-to-tree', {
    method: 'GET',
    params: {tenantId: tenantId}
  });
}

export async function createOrganize(data?: any) {
  return request<API.OrganizeListResponseDataType>('/api/gstdev-system/v1/organize/create', {
    method: 'POST',
    data: data,
  });
}

export async function editOrganize(data?: any) {
  return request<API.OrganizeListResponseDataType>('/api/gstdev-system/v1/organize/edit', {
    method: 'PUT',
    data: data,
  });
}

export async function deleteOrganize(id: string) {
  return request<API.OrganizeListItemDataType>('/api/gstdev-system/depart', {
    method: 'DELETE',
    params: {id: id}
  });
}

export async function getOrganizeInfo(id: Key) {
  return request<API.OrganizeInfoResponseDataType>('/api/gstdev-system/v1/organize/getInfo', {
    method: 'GET',
    params: {id: id}
  });
}
