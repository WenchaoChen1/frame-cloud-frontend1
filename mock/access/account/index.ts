import { Request, Response } from 'express';

function getAccountListInLoginService(req: Request, res: Response, u: string) {
  const result = {
    code: "0",
    message: null,
    success: true,
    data: [
      {
        id: '01',
        name: 'name01',
        email: 'email@01.com',
        tenantId: 'tenant01',
        role: 'role01',
        user: {
          id: 'uid01',
          username: 'user01',
        }
      },
      {
        id: '02',
        name: 'name02',
        email: 'email@02.com',
        tenantId: 'tenant02',
        role: 'role02',
        user: {
          id: 'uid02',
          username: 'user02',
        }
      },
      {
        id: '03',
        name: 'name03',
        email: 'email@03.com',
        tenantId: 'tenant03',
        role: 'role03',
        user: {
          id: 'uid03',
          username: 'user03',
        }
      },
      {
        id: '04',
        name: 'name04',
        email: 'email@04.com',
        tenantId: 'tenant04',
        role: 'role04',
        user: {
          id: 'uid04',
          username: 'user04',
        }
      },
      {
        id: '05',
        name: 'name05',
        email: 'email@05.com',
        tenantId: 'tenant05',
        role: 'role05',
        user: {
          id: 'uid05',
          username: 'user05',
        }
      }
    ]}

  return res.json(result);
}

export default {
  // Called after successful login
  'GET /api/gstdev-system/v1/user/get-by-id-to-account': getAccountListInLoginService,
};
