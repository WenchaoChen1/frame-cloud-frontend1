import {Alert, Button, Form, message} from 'antd';
import React, {useState} from 'react';
import {flushSync} from 'react-dom';
import {LoginForm, ProFormCheckbox, ProFormText,} from '@ant-design/pro-components';
import Footer from '@/components/Footer';
import {icon} from '@/pages/common/icon';
import {FormattedMessage, history, Link, useModel} from '@umijs/max';
import {getLocalStorage, removeLocalStorage, setLocalStorage, setToken} from '@/utils/utils';
import {oauth2TokenService} from '@/services/api/gstdevSystem/login/loginService';
import styles from './index.less';
import {SELECT_ACCOUNT_PATH} from "@/pages/common/constant";

const LoginMessage: React.FC<{ content: string }> = ({content}) => {
  return <Alert showIcon type="error" message={content} style={{marginBottom: 24}}/>
};

const Login: React.FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState');

  const [userLoginState, ] = useState<API.LoginResult>({});
  const [loginLoading, setLoginLoading] = useState<boolean>(false);

  const [form] = Form.useForm();
  const email = Form.useWatch('username', form);

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

  const handleRememberMe = (values: API.UserLoginBodyDataType) => {
    setLocalStorage('rememberMe', values.rememberMe);

    if (values.rememberMe) {
      setLocalStorage('username', values.username);
      setLocalStorage('password', values.password);
    } else {
      removeLocalStorage('username');
      removeLocalStorage('password');
    }
  }

  const handleSubmit = async (values: API.Oauth2TokenParamsDataType) => {
    try {
      values.grant_type = 'password';
      const loginResponse = await oauth2TokenService(values);

      if (loginResponse.access_token) {
        setToken(loginResponse.access_token);

        handleRememberMe(values);

        await fetchUserInfo();
        history.push(SELECT_ACCOUNT_PATH);
        return;

        // await fetchUserInfo();
        // message.success('Login Success');

        // const path = currentUser?.redirect ? currentUser.redirect : '/';
        // const path = '/welcome';
        // history.push(path);
        //
        // return;
      }

      if (loginResponse.request.status === 400) {
        form.setFields([{name: 'password', errors: ['Please verify your password or try to recover.']}]);
      }

    } catch (error) {
      console.log('loginResponse, error:', error);
      form.setFields([{name: 'username', errors: ['User not found, validate your email and try again.']}]);
    }
  };

  const {status, type: loginType} = userLoginState;

  return (
    <div className={[styles.container, styles.loginBg].join(' ')}>
      <div className={styles.content}>
        <div className={styles.header}><img src={icon.loginLogo} className={styles.logo}/></div>
        <LoginForm
          title="Sign In"
          subTitle=''
          submitter={false}
          form={form}
          actions={[]}
          onFinish={async (values) => {
            setLoginLoading(true);
            message.destroy();

            await handleSubmit(values as API.Oauth2TokenParamsDataType);

            setLoginLoading(false);
          }}
          request={async () => {
            let rememberMeValue = false;
            let usernameValue = '';
            let passwordValue = '';

            rememberMeValue = getLocalStorage('rememberMe') === 'true';
            if (rememberMeValue) {
              usernameValue = getLocalStorage('username') || '';
              passwordValue = getLocalStorage('password') || '';
            }

            return {
              rememberMe: rememberMeValue,
              username: usernameValue,
              password: passwordValue,
            }
          }}
        >
          <div style={{ height: 20 }} />
          {status === 'error' && loginType === 'account' && (<LoginMessage content='The account or password is incorrect'/>)}
          <ProFormText
            name="username"
            label={'Your email'}
            fieldProps={{
              size: 'large',
            }}
            placeholder={'email'}
            rules={[
              {
                required: true,
                message: 'Please input your email',
              },
              {
                type: 'email',
                message: "Please enter a valid email address"
              }
            ]}
          />
          <ProFormText.Password
            name="password"
            label={'Password'}
            fieldProps={{size: 'large'}}
            placeholder={'password'}
            rules={[
              {
                required: true,
                message: (
                  <FormattedMessage
                    id="pages.login.password.required"
                    defaultMessage="Please input the password"
                  />
                ),
              },
            ]}
          />

          <div className={styles.rememberMeBox}>
            <ProFormCheckbox noStyle name="rememberMe">
              <FormattedMessage id="pages.login.rememberMe" defaultMessage="Remember Me" />
            </ProFormCheckbox>
            <Link to={`/login/forgot?email=${email}`} className={styles.forgotPassword}>Forgot Password</Link>
          </div>
          <Button size="large" type="primary" htmlType="submit" loading={loginLoading} className={styles.signInBtn}>
            Sign In
          </Button>
        </LoginForm>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
