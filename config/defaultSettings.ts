import { ProLayoutProps } from '@ant-design/pro-components';
import {SITE_TITLE} from "../src/pages/common/constant";

const Settings: ProLayoutProps & {pwa?: boolean; logo?: string} = {
  title: SITE_TITLE,
  navTheme: 'light',
  colorPrimary: '#009E46',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  pwa: true,
  logo: '/icons/common/logo.png',
  iconfontUrl: '',
  token: {
    // modify css by token
    //https://procomponents.ant.design/components/layout#%E9%80%9A%E8%BF%87-token-%E4%BF%AE%E6%94%B9%E6%A0%B7%E5%BC%8F
    // colorPrimary: '#e1990f',
  },
};

export default Settings;
