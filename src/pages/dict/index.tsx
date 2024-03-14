import React, {Key, useEffect, useState} from 'react';
import {Button, Col, Row, Space, Tree, TreeSelect} from 'antd';
import {PageContainer} from '@ant-design/pro-components';
import {getTenantTreeService} from "@/services/api/gstdevSystem/tenant/tenantService";
import {getDictTreeService} from "@/services/api/gstdevSystem/dict/dictService";
import RightContainer from "@/pages/dict/components/rightContainer";
import commonStyle from '@/pages/common/index.less';
import styles from "@/pages/dict/index.less";

const Dict: React.FC = () => {
  const [tenantId, setTenantId] = useState<string|undefined>(undefined);
  const [tenantTreeData, setTenantTreeData] = useState<API.TenantItemDataType[]>([]);

  const [dictionaryTreeData, setDictionaryTreeData] = useState<API.DictItemDataType[]>([]);
  const [selectDictionaryId, setSelectDictionaryId] = useState<Key>('');

  const [isEdit, setIsEdit] = useState(true);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);

  const getTenantTreeRequest = async () => {
    const tenantTreeResponse = await getTenantTreeService();
    if (tenantTreeResponse.success && tenantTreeResponse.data) {
      if (tenantTreeResponse.data?.length > 0) {
        setTenantId(tenantTreeResponse.data[0].id || undefined);
      }

      setTenantTreeData(tenantTreeResponse.data);
      return tenantTreeResponse.data;
    } else {
      setTenantId(undefined);
      setTenantTreeData([]);
      return [];
    }
  }

  const getDictionaryTreeRequest = async (tenantId: string) => {
    const dictionaryTreeResponse = await getDictTreeService(tenantId);
    if (dictionaryTreeResponse.success && dictionaryTreeResponse.data) {
      setDictionaryTreeData(dictionaryTreeResponse.data);
      if (dictionaryTreeResponse.data.length > 0) {
        setSelectDictionaryId(dictionaryTreeResponse.data[0]?.key || '');
      } else {
        setSelectDictionaryId('');
      }
    } else {
      setDictionaryTreeData([]);
      setSelectDictionaryId('');
    }
  }

  const onChangeTenant = (tenantId: string) => {
    setTenantId(tenantId);
    setIsEdit(true);
  };

  const onSelectDictionary = (selectedKeysValue: React.Key[], info: any) => {
    setSelectDictionaryId(info.node.key);
    setIsEdit(true);
  };

  const onAddBtn = () => {
    setIsEdit(false);
  }

  const onCancelBtn = () => {
    setIsEdit(true);
  }

  useEffect(() => {
    getTenantTreeRequest();
  }, [])

  useEffect(() => {
    if (tenantId) {
      getDictionaryTreeRequest(tenantId);
    }
  }, [tenantId])

  return (
    <PageContainer className={[commonStyle.pageContainer, styles.container].join(' ')} title={' '}>
      <Row className={styles.contentBox}>
        <Col className={styles.colLeftBox} span={8}>
          <TreeSelect
            treeData={tenantTreeData}
            value={tenantId}
            onChange={onChangeTenant}
            style={{width: '100%'}}
            dropdownStyle={{maxHeight: 400, overflow: 'auto'}}
            placeholder="Please select tenant"
            treeDefaultExpandAll={true}
            allowClear={false}
            filterTreeNode={true}
            fieldNames={{
              value: 'id',
              label: 'tenantName'
            }}
          />

          <Space size={10} className={styles.actionRow}>
            <Button type="primary" onClick={onAddBtn}>Add</Button>
          </Space>

          {
            dictionaryTreeData.length > 0 &&
            <Tree
              treeData={dictionaryTreeData}
              onSelect={onSelectDictionary}
              defaultSelectedKeys={[selectDictionaryId]}
              autoExpandParent={autoExpandParent}
              blockNode
              defaultExpandAll
              // expandedKeys={expandedKeys}
              // fieldNames={{ title: 'name', key: 'id'}}
            />
          }
        </Col>

        <Col className={styles.colRightBox} span={16}>
          {
            selectDictionaryId &&
            <RightContainer
              isEdit={isEdit}
              tenantId={tenantId}
              dictionaryTreeData={dictionaryTreeData}
              selectDictionaryId={selectDictionaryId}
            />
          }
        </Col>
      </Row>

      {/*{*/}
      {/*  openModal &&*/}
      {/*  <Modal*/}
      {/*    title={'Add'}*/}
      {/*    width={780}*/}
      {/*    open={openModal}*/}
      {/*    onCancel={onCancelBtn}*/}
      {/*    getContainer={false}*/}
      {/*    footer={false}*/}
      {/*  >*/}
      {/*    <OrganizeFormContent/>*/}
      {/*  </Modal>*/}
      {/*}*/}
    </PageContainer>
  );
};

export default Dict;
