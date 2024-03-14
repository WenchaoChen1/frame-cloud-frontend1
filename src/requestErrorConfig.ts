import { message, notification } from 'antd';
import type { RequestConfig } from '@umijs/max';
import type { RequestOptions } from '@@/plugin-request/request';

// Error handling scheme: Error type
enum ErrorShowType {
  SILENT = 0,
  WARN_MESSAGE = 1,
  ERROR_MESSAGE = 2,
  NOTIFICATION = 3,
  REDIRECT = 9,
}
// The response data format agreed with the backend
interface ResponseStructure {
  success: boolean;
  data: any;
  errorCode?: number;
  errorMessage?: string;
  showType?: ErrorShowType;
}

const filterUrl = [
  '/api/gstdev-identity/oauth2/token',
  '/api/gstdev-system/v1/user/login'
];

/**
 * pro The built-in error handling allows you to make your own changes here
 * @doc https://umijs.org/docs/max/request
 */
export const errorConfig: RequestConfig = {
  // Error handling: umi@3 Error handling scheme for.
  errorConfig: {
    // An error is thrown
    errorThrower: (res) => {
      const { success, data, errorCode, errorMessage, showType } =
        res as unknown as ResponseStructure;
      console.log('errorConfig res', res);

      if (!success) {
        const error: any = new Error(errorMessage);
        error.name = 'BizError';
        error.info = { errorCode, errorMessage, showType, data };
        throw error;
      }
    },
    // Error reception and handling
    errorHandler: (error: any, opts: any) => {
      if (opts?.skipErrorHandler) throw error;
      // errorThrower The error thrown.
      if (error.name === 'BizError') {
        const errorInfo: ResponseStructure | undefined = error.info;
        if (errorInfo) {
          const { errorMessage, errorCode } = errorInfo;
          switch (errorInfo.showType) {
            case ErrorShowType.SILENT:
              // do nothing
              break;
            case ErrorShowType.WARN_MESSAGE:
              message.warning(errorMessage);
              break;
            case ErrorShowType.ERROR_MESSAGE:
              message.error(errorMessage);
              break;
            case ErrorShowType.NOTIFICATION:
              notification.open({
                description: errorMessage,
                message: errorCode,
              });
              break;
            case ErrorShowType.REDIRECT:
              // TODO: redirect
              break;
            default:
              message.error(errorMessage);
          }
        }
      } else if (error.response) {
        // Axios error
        // The request was successfully issued and the server responded with a status code, but the status code exceeded the range of 2xx
        message.error(`Response status:${error.response.status}`);
      } else if (error.request) {
        // The request has been successfully initiated, but no response has been received
        // 'error. request ' is an instance of the XML HttpRequest in the browser,
        // In node.js, it is an instance of http. ClientRequest
        message.error('None response! Please retry.');
      } else {
        // message.error('Request error, please retry.');
        console.log(`Request error, please retry. error :${error}`);
      }
    },
  },

  // request interceptor
  requestInterceptors: [
    (config: RequestOptions) => {
      // Intercept request configuration for personalized processing
      const url = config?.url?.concat('?token = ');
      return { ...config, url };
    },
  ],

  // response interceptor
  responseInterceptors: [
    (response: any) => {
      const { data } = response as unknown as ResponseStructure;

      if (data?.success === false) {
        message.error('request failed');
        console.log('request failed');
      }
      return response;
    },
  ],
};
