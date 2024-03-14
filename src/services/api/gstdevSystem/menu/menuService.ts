import {
  getMenuTree,
  createMenu,
  editMenu,
  deleteMenu,
  moveMenu,
} from '@/services/api/gstdevSystem/menu/menuApi';

// menu - list
export async function getMenuTreeService (
  params?: {
    current?: number;
    pageSize?: number;
  }
) {
  return await getMenuTree(params);
}

export async function createMenuService(data?: any) {
  return await createMenu(data);
}

export async function editMenuService(data?: any) {
  return await editMenu(data);
}

export async function deleteMenuService(id: string) {
  return await deleteMenu(id);
}

export async function moveMenuService(data: API.moveMenuDataType) {
  return await moveMenu(data);
}
