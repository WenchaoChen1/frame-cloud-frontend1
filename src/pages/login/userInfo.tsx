import React from "react";
import {Form, message, Row, Space} from "antd";
import HeaderContentRender from "@/components/RightContent/headerContentRender";
import {
  ProForm,
  ProFormDigit,
  ProFormRadio,
  ProFormText,
  ProFormTextArea,
} from "@ant-design/pro-components";
import {editUserService, getUserInfoService} from "@/services/api/gstdevSystem/user/userService";
import commonStyle from "@/pages/common/index.less";
import styles from "@/pages/login/userInfo.less";

const UserInfo: React.FC = () => {
  const [form] = Form.useForm();

  const getUserInfoRequest = async () => {
    return {
      id: '1',
      username: 'username',
      mobile: 'mobile',
      email: 'email',
      status: '1',
    };

    // const userDetailResponse =  await getUserInfoService('1');
    // if (userDetailResponse.success === true && userDetailResponse.data) {
    //   return userDetailResponse.data;
    // }
    //
    // return {
    //   id: '',
    //   username: '',
    //   mobile: '',
    //   email: '',
    //   status: '',
    // };
  }

  const onFinishForm = async (record: API.UserItemDataType) => {
    const response = await editUserService(record);
    if (response.success) {
      message.success('save successfully');
    } else {
      message.error('save failed');
    }
  }

  return (
    <div className={[commonStyle.pageContainer, styles.container].join(' ')}>
      <div className={[commonStyle.justify, styles.titleBox].join(' ')}>
        <HeaderContentRender />
      </div>

      <div className={[styles.contentBox].join(' ')}>
        <ProForm<API.UserItemDataType>
          form={form}
          layout={'vertical'}
          request={getUserInfoRequest}
          onFinish={onFinishForm}
        >
          <Row>
            <ProFormText name="id" hidden={true}/>
            <ProFormText name="tenantId" hidden={true}/>
          </Row>

          <Space size={20}>
            <ProFormText
              rules={[
                {
                  required: true,
                  message: "Name is required"
                }
              ]}
              label={"Name"}
              name="username"
              width="md"
              placeholder={"name"}
            />

            <ProFormText
              rules={[
                {
                  required: true,
                  message: "email is required",
                },
              ]}
              label={"Email"}
              name="email"
              width="md"
            />
          </Space>

          <Space size={20}>
            <ProFormDigit
              label={"Mobile"}
              width="md"
              name="mobile"
              placeholder={"mobile"}
            />

            <ProFormRadio.Group
              name="status"
              label={"Status"}
              initialValue={1}
              options={[
                {
                  value: 0,
                  label: 'Disable',
                },
                {
                  value: 1,
                  label: 'Enable',
                }
              ]}
              rules={[
                {
                  required: true,
                  message: "Status is required",
                }
              ]}
            />
          </Space>

          <Space size={20}>
            <ProFormTextArea
              name="description"
              label={"Description"}
              width="md"
            />
          </Space>
        </ProForm>
      </div>
    </div>
  )
}

export default UserInfo;
