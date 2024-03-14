import { Request, Response } from 'express';

function getTenantList(req: Request, res: Response, u: string) {
  const result = {
    code: "0",
    message: null,
    success: true,
    data: [
      {
        id: "cf9b135c-b58c-4121-a46c-25bfe254cc01",
        parentId: "0",
        tenantName: "tenantName01",
        sort: 1,
        status: 1,
        tenantCode: 'code01',
        description: "description01",
        createdAt: "2023-08-18",
        createdBy: null,
        updatedAt: null,
        updatedBy: null,
        children: [
          {
            id: "cf9b135c-b58c-4121-a46c-25bfe254cc02",
            parentId: "1",
            tenantName: "tenantName02",
            sort: 2,
            status: 1,
            tenantCode: 'code02',
            description: "description02",
            createdAt: "2023-08-18",
            createdBy: null,
            updatedAt: null,
            updatedBy: null,
            children: []
          },
          {
            id: "cf9b135c-b58c-4121-a46c-25bfe254cc03",
            parentId: "1",
            tenantName: "tenantName03",
            sort: 3,
            status: 0,
            tenantCode: 'code03',
            description: "description03",
            createdAt: "2023-08-18",
            createdBy: null,
            updatedAt: null,
            updatedBy: null,
            children: []
          }
        ]
      }
    ]}

  return res.json(result);
}

export default {
  'GET /api/gstdev-system/v1/tenant/get-tenant-by-id-to-tree': getTenantList,
};
