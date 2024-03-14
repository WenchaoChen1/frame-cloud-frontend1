import React from 'react';
import RightContent from "@/components/RightContent/index";
import commonStyle from "@/pages/common/index.less";
import styles from './index.less';

const HeaderContentRender: React.FC = () => {
  return (
    <div className={[commonStyle.pageContainer, styles.headBox].join(' ')}>
      <RightContent />
    </div>
  );
};
export default HeaderContentRender;
