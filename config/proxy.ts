const target = 'http://192.168.0.229:8201';
// test
// const target = 'http://34.194.117.233:8201';
// uat
// const target = 'http://3.229.110.13:8201';


/**
 * @name proxy configuration
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 *
 * @doc https://umijs.org/docs/guides/proxy
 */
export default {
  dev: {
    '/api': {
      target,
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
};
