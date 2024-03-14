import React from 'react';
import {Avatar, Dropdown, MenuProps, Spin} from 'antd';
import {useModel, history} from '@umijs/max';
import {CaretDownFilled} from '@ant-design/icons';
import {logOut} from "@/utils/utils";
import {SELECT_ACCOUNT_PATH, USER_INFO_PATH} from "@/pages/common/constant";
import commonStyle from "@/pages/common/index.less";
import styles from './index.less';

export type GlobalHeaderRightProps = {
  menu?: boolean;
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = () => {
  const { initialState } = useModel('@@initialState');

  const loading = (
    <span className={`${styles.action} ${styles.account}`}>
      <Spin size="small" style={{marginInline: 8}}/>
    </span>
  );

  if (!initialState) {
    return loading;
  }

  const userInfo = initialState.currentUser?.currentLoginAccount?.user;

  const getDropDownMenu = () => {
    const items: MenuProps['items'] = [
      {
        key: 'userInfo',
        label: (
          <span onClick={() => history.push(USER_INFO_PATH)} className={commonStyle.dropdownItem}>
            User Info
          </span>
        )
      },
      {
        key: 'selectAccount',
        label: (
          <span onClick={() => history.push(SELECT_ACCOUNT_PATH)} className={commonStyle.dropdownItem}>
            Account Info
          </span>
        )
      },
      {
        key: 'logOut',
        label: <span onClick={() => logOut()} className={commonStyle.dropdownItem}>Log Out</span>
      }
    ];

    return {items};
  }

  return (
    <div className={`${styles.action} ${styles.account}`}>
      <Avatar size="small" className={styles.avatar} src={userInfo?.avatar} alt="avatar" />
      <div>
        <div className={styles.name}>{userInfo?.username}</div>
      </div>

      <Dropdown
        trigger={['click']}
        placement="bottomRight"
        menu={getDropDownMenu()}
        className={[commonStyle.justifyCenter, styles.dropDownBtn].join(' ')}
      >
        <CaretDownFilled className={styles.dropDownIcon}/>
      </Dropdown>
    </div>
  );
};

export default AvatarDropdown;
