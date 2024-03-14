import React, {useEffect, useState} from "react";
import {Card, message, Row} from "antd";
import {history, useModel} from "@umijs/max";
import {flushSync} from "react-dom";
import commonStyle from "@/pages/common/index.less";
import styles from './selectAccount.less';
import HeaderContentRender from "@/components/RightContent/headerContentRender";
import {getAccountListInLoginService} from "@/services/api/gstdevSystem/account/accountService";
import {CURRENT_ACCOUNT_ID, REDIRECT_PATH} from "../common/constant";
import {setLocalStorage} from "@/utils/utils";

const accountData: API.AccountItemDataType[] = [
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
];

const SelectAccount: React.FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState');

  const [accountList, setAccountList] = useState<API.AccountItemDataType[]>([]);

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      flushSync(() => {
        setInitialState((s) => ({
          ...s,
          currentUser: userInfo,
        }));
      });
    }
    return userInfo;
  };

  const onClickCard = async (accountId: string) => {
    setLocalStorage(CURRENT_ACCOUNT_ID, accountId);

    await fetchUserInfo();
    message.success('Login Success');

    // redirect index page
    history.push(REDIRECT_PATH);
  }

  const getAccountListInLoginRequest = async () => {
    const getAccountListResponse = await getAccountListInLoginService();
    if (getAccountListResponse.success && getAccountListResponse.data) {
      // only one account, go directly to the homepage
      if (getAccountListResponse.data.length === 1) {
        await fetchUserInfo();
        return history.push(REDIRECT_PATH);
      }

      // multiple accounts
      setAccountList(getAccountListResponse.data);
    } else {
      setAccountList([]);
    }
  }

  useEffect(() => {
    getAccountListInLoginRequest();
  }, [])

  return (
    <div className={[commonStyle.pageContainer, styles.container].join(' ')}>
      <div className={[commonStyle.justify, styles.titleBox].join(' ')}>
        <HeaderContentRender />
      </div>

      <div className={styles.selectTitle}>Your Accounts</div>
      <div className={[commonStyle.justifyStart, styles.contentBox].join(' ')}>
        {
          accountList.map((item, index) => {
            return (
              <Card
                key={index}
                className={[commonStyle.justifyCenter, styles.accountCard].join(' ')}
                onClick={() => onClickCard(item?.id || '')}
              >
                <div className={styles.accountName}>{item.name}</div>
                <div className={styles.accountType}>{item.accountTypeConstants}</div>
              </Card>
            )
          })
        }
      </div>
    </div>
  )
}

export default SelectAccount;
