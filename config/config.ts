// https://umijs.org/config/
import { defineConfig } from '@umijs/max';
import { join } from 'path';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './routes';
import {SITE_TITLE} from "../src/pages/common/constant";

const { REACT_APP_ENV = 'dev' } = process.env;

export default defineConfig({
  /**
   * @name enables hash mode
   * @description includes a hash suffix in the product after the build. Usually used for incremental publishing and to avoid browser loading cache.
   * @doc https://umijs.org/docs/api/config#hash
   */
  hash: true,

  /**
   * @name compatibility settings
   * @description Setting ie11 may not be perfectly compatible, you need to check all the dependencies you use
   * @doc https://umijs.org/docs/api/config#targets
   */
  // targets: {
  //   ie: 11,
  // },
  /**
   * @name The configuration of the @ name route, files not introduced in the route will not be compiled
   * @description only supports configuration of path, component, routes, redirect, wrappers, and title
   * @doc https://umijs.org/docs/guides/routes
   */
  // umi routes: https://umijs.org/docs/routing
  routes,
  /**
   * @name Configuration of theme
   * @description Although is called a theme, it is actually just a variable setting for less
   * @doc Theme settings for antd https://ant.design/docs/react/customize-theme-cn
   * @doc Theme configuration for  umi https://umijs.org/docs/api/config#theme
   */
  theme: {
    // If you don't want configProvide to dynamically set the theme, you need to set this to default
    // Only when set to variable can configProvide be used to dynamically set the main color tone
    'root entry name': 'variable',
    // ColorPrimary: '# e1990f',
  },
  /**
   * @name Internationalization configuration of moment
   * @description If there is no requirement for internationalization, opening it can reduce the package size of JS
   * @doc https://umijs.org/docs/api/config#ignoremomentlocale
   */
  ignoreMomentLocale: true,
  /**
   * @name proxy configuration
   * @description can allow your local server to proxy to your server, so you can access the server's data
   * @see Please note that the following agents can only be used during local development and cannot be used after building.
   * @doc Introduction to Agent https://umijs.org/docs/guides/proxy
   * @doc proxy configuration https://umijs.org/docs/api/config#proxy
   */
  proxy: proxy[REACT_APP_ENV as keyof typeof proxy],
  /**
   * @name Quick Hot Update Configuration
   * @description a good hot update component that can retain the state during updates
   */
  fastRefresh: true,

  //==============The following are all plugin configurations for max===============
  /**
   * @name Data Flow Plugin
   * @@doc https://umijs.org/docs/max/data-flow
   */
  model: {},
  /**
   * A global initial data flow that can be used to share data between plugins
   * @description can be used to store some global data, such as user information, or some global states. The global initial state is created at the beginning of the entire Umi project.
   * @doc https://umijs.org/docs/max/data-flow#%E5%85%A8%E5%B1%80%E5%88%9D%E5%A7%8B%E7%8A%B6%E6%80%81
   */
  initialState: {},
  /**
   * @name layout plugin
   * @doc https://umijs.org/docs/max/layout-menu
   */
  title: SITE_TITLE,
  layout: {
    locale: true,
    ...defaultSettings,
  },
  /**
   * @name moment2dayjs plugin
   * @description Replace the moment in the project with dayjs
   * @doc https://umijs.org/docs/max/moment2dayjs
   */
  moment2dayjs: {
    preset: 'antd',
    plugins: ['duration'],
  },
  /**
   * @name internationalization plugin
   * @doc https://umijs.org/docs/max/i18n
   */
  locale: {
    default: 'en-US',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  /**
   * @name antd plugin
   * @doc https://umijs.org/docs/max/antd#antd
   */
  antd: {},
  /**
   * @name Network Request Configuration
   * @description it base to axios and ahooks useRequest
   * @doc https://umijs.org/docs/max/request
   */
  request: {},
  /**
   * @name permission plugin
   * @description The permission plugin based on initialState must be opened first
   * @doc https://umijs.org/docs/max/access
   */
  access: {},
  /**
   * @name Additional script in <head>
   * @description Configure additional scripts in<head>
   */
  headScripts: [
    // Resolve the issue of white screen during first loading
    { src: '/scripts/loading.js', async: true },
  ],
  //================ pro pugin configration =================
  presets: ['umi-presets-pro'],
  /**
   * @name openAPI
   * @doc https://pro.ant.design/zh-cn/docs/openapi/
   */
  openAPI: [
    {
      requestLibPath: "import { request } from '@umijs/max'",
      // Or use an online version
      // schemaPath: "https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json"
      schemaPath: join(__dirname, 'oneapi.json'),
      mock: false,
    },
    {
      requestLibPath: "import { request } from '@umijs/max'",
      schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/CA1dOm%2631B/openapi.json',
      projectName: 'swagger',
    },
  ],
  mfsu: {
    strategy: 'normal',
  },
  requestRecord: {},
});
