import {PageContainer} from '@ant-design/pro-components';
import React from 'react';
import styles from '@/pages/home/index.less';
import commonStyle from '@/pages/common/index.less';

const Index: React.FC = () => {

  return (
    <PageContainer title={''} className={[commonStyle.pageContainer, styles.pageContainer].join(' ')}>
      <div className={styles.contentBox}>

      </div>
    </PageContainer>
  );
};

export default Index;
