import { Request, Response } from 'express';
import {DataNode} from "antd/es/tree";
import {random} from "lodash";

const getTreeData = () => {
  const treeRandomNumber = random(1, 100);

  const treeData: DataNode[] = [
    {
      title: '0-0' + treeRandomNumber,
      key: '0-0' + treeRandomNumber,
      children: [
        {
          title: '0-0-0',
          key: '0-0-0',
          children: [
            { title: '0-0-0-0', key: '0-0-0-0' },
            { title: '0-0-0-1', key: '0-0-0-1' },
            { title: '0-0-0-2', key: '0-0-0-2' },
          ],
        },
        {
          title: '0-0-1',
          key: '0-0-1',
          children: [
            { title: '0-0-1-0', key: '0-0-1-0' },
            { title: '0-0-1-1', key: '0-0-1-1' },
            { title: '0-0-1-2', key: '0-0-1-2' },
          ],
        },
        {
          title: '0-0-2',
          key: '0-0-2',
        },
      ],
    },
    {
      title: '0-1',
      key: '0-1',
      children: [
        { title: '0-1-0-0', key: '0-1-0-0' },
        { title: '0-1-0-1', key: '0-1-0-1' },
        { title: '0-1-0-2', key: '0-1-0-2' },
      ],
    },
    {
      title: '0-2',
      key: '0-2',
    },
  ];

  return treeData;
}

function getTree(req: Request, res: Response) {
  const result = {
    code: "0",
    message: null,
    success: true,
    data: getTreeData()
  }

  return res.json(result);
}

function getInfo(req: Request, res: Response) {
  const randomNumber = random(1, 100);

  const result = {
    code: "0",
    message: null,
    success: true,
    data: {
      id: "id-" + randomNumber,
      key: "key",
      tenantId: "1",
      parentId: "0-0-1",
      name: "name" + randomNumber,
      code: "code" + randomNumber,
      status: 1,
      sort: randomNumber,
      shortName: "shortName" + randomNumber,
      description: "description" + randomNumber,
    }
  }

  return res.json(result);
}

function create(req: Request, res: Response) {
  const result = {
    code: "0",
    message: null,
    success: true,
  }

  return res.json(result);
}

function edit(req: Request, res: Response) {
  const result = {
    code: "0",
    message: null,
    success: true,
  }

  return res.json(result);
}

export default {
  'GET /api/gstdev-system/v1/dict/get-all-dict-to-tree': getTree,
  'POST /api/gstdev-system/v1/dict/create': create,
  'PUT /api/gstdev-system/v1/dict/edit': edit,
  'GET /api/gstdev-system/v1/dict/getInfo': getInfo,
};
