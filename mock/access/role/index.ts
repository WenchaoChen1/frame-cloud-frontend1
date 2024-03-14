import { defineMock } from 'umi';

export default defineMock({
  // list
  'GET /api/gstdev-system/v1/role/get-all-role-to-tree': (req, res) => {
    res.send({
      code: "0",
      message: null,
      success: true,
      data: [
        {
          id: "cf9b135c-b58c-4121-a46c-25bfe254cc01",
          parentId: "0",
          tenantId: "1",
          code: "17",
          roleName: "roleName01",
          sort: 1,
          status: 1,
          description: "description01",
          createdAt: "2023-08-18",
          createdBy: null,
          updatedAt: null,
          updatedBy: null,
          children: [
            {
              id: "cf9b135c-b58c-4121-a46c-25bfe254cc02",
              parentId: "1",
              tenantId: "1",
              code: "17",
              roleName: "roleName01-1",
              sort: 2,
              status: 1,
              description: "description02",
              createdAt: "2023-08-18",
              createdBy: null,
              updatedAt: null,
              updatedBy: null,
            },
            {
              id: "cf9b135c-b58c-4121-a46c-25bfe254cc03",
              parentId: "1",
              tenantId: "1",
              code: "17",
              roleName: "roleName01-2",
              sort: 1,
              status: 0,
              description: "description03",
              createdAt: "2023-08-18",
              createdBy: null,
              updatedAt: null,
              updatedBy: null,
            }
          ]
        }
      ]});
  },

});
