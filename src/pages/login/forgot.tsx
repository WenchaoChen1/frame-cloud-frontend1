import React, { useState } from 'react';
import {Button, Form, notification,} from 'antd';
import Footer from '@/components/Footer';
import {
  LoginForm,
  ProFormText,
} from '@ant-design/pro-components';
import { Link, SelectLang } from '@umijs/max';
import { icon } from '@/pages/common/icon';
import {getQueryParams} from "@/utils/utils";
import {forgotPasswordService} from "@/services/api/gstdevSystem/login/loginService";
import styles from '@/pages/login/index.less';
import {LOGIN_PATH} from "@/pages/common/constant";

const ForgotPassword: React.FC = () => {
  const queryParams: API.ForgotPasswordDataType = getQueryParams();

  const [form] = Form.useForm();
  const [submitLoading, setSubmitLoading] = useState(false);

  const handleSubmit = async (data: API.ForgotPasswordDataType) => {
    setSubmitLoading(true);
    try {
      const forgotPasswordResponse = await forgotPasswordService(data);

      if (forgotPasswordResponse.success) {
        setSubmitLoading(false);
        notification.success({
          message: 'The email reset successfully',
        });
      } else {
        notification.error({
          message: forgotPasswordResponse.message,
        });
        setSubmitLoading(false);
      }
    } catch (error) {
      setSubmitLoading(false);
      form.setFields([{name: 'email', errors: ['Invalid email']}]);
    }
  };

  return (
    <div className={[styles.container, styles.loginBg].join(' ')}>
      <div className={styles.lang} data-lang>
        {SelectLang && <SelectLang />}
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <img alt="logo" className={styles.logo} src={icon.loginLogo} />
        </div>
        <LoginForm
          title="Forgot your password?"
          subTitle=''
          submitter={false}
          form={form}
          actions={[]}
          initialValues={{'email': queryParams?.email}}
          onFinish={handleSubmit}
        >
          <div className={styles.forgotPasswordText}>
            {"Enter your email address and we'll send you a link to reset your password"}
          </div>

          <ProFormText
            name="email"
            label={'Email Address'}
            fieldProps={{
              size: 'large',
            }}
            placeholder={'Email'}
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

          <Button
            type="primary"
            size="large"
            htmlType="submit"
            loading={submitLoading}
            className={styles.signInBtn}
          >
            Request Reset Link
          </Button>

          <div className={styles.backLoginInBox}>
            <Link className={styles.forgotPassword} to={LOGIN_PATH}>
              Back to Sign In
            </Link>
          </div>
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
