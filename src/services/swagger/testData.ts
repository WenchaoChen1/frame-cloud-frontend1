export const testLoginResponse: API.LoginResponse = {
  success: true,
  message: '',
  code: "0",
  data: {
    access_token: "eyJ4NXQjUzI1NiI6InhjMW03dlNoZ1ZDMnFIVnFHRG5tU1ZqWEdRU09FOVpSTDZiVzNqNXo4bkUiLCJraWQiOiJnc3RkZXYiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI5ZmIyZjE0ZC0yYjE5LTQ1MjEtOWNlZi1jNzM0MmFmZWIxNGMiLCJhdWQiOiJwYXNzd29yZC1jbGllbnQiLCJuYmYiOjE2ODkyOTkxMzEsImlzcyI6Imh0dHA6Ly8xMjcuMC4wLjE6ODEwMSIsImV4cCI6MTY5MTg5MTEzMSwiaWF0IjoxNjg5Mjk5MTMxfQ.r6b9ONpHZAO2Cgvxea9VYjCf5WDMhSKTUnYKgrVxDmZ4T-Jrug4xZ_QxcAkt8TtVtb5YnMLwg7mODNCvVd8qW_TrOeP7G406xtjhQATMXfv1B_ViYgLJ5lQ1Gq_pe-6VxWjUAlVOHT4EeiTcjy4gd6zuxs2EIHvmKxRIYZU9-37jPNEgnoOH7nj0C0LDbTFrS7iFCN0HygRncIJ0YwbtMhnKRVUCkMmSY1DVkY6OkGiH2FZrM0zPCUavbMzwUuJJRTAGmgfb_fu3DpWZpjDijrXEixB9SFanvI0SRfF0olhvPlpLccnD7ieioVfM-IAc1iIEoh1Iqoq646cCNeBPfw",
    refresh_token: "pN-ytcjwLkxAlSGZ_HyMYvh_F_PJRwR74FjLWkSvyN407V_ZzStwFdXJMoTZHVSUUq7CVNX-Bvd_CK-xFCD84v1_240gBJSjjsfIqU1YV0xi32yzOa7yr5Ij0T9qF3yz",
    token_type: "Bearer",
    expires_in: 2592000
  }
}

export const testGetUserInfoResponse: API.GetUserInfoResponse = {
  success: true,
  message: '',
  code: "0",
  data: {
    accountId: "9fb2f14d-2b19-4521-9cef-c7342afeb14c",
    tenantId: "76d65734-f63f-4908-be81-755b51f80f2e",
    tenantIdSelf: null,
    user: {
      id: "9fb2f14d-2b19-4521-9cef-c7342afeb14c",
      username: "chelse365@163.com",
      firstName: "li",
      lastName: "js",
      email: "chelse365@163.com",
      status: 1,
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
    },
    tenant: '',
    currentLoginAccount: '',
    currentLoginAccountUserPermissions: ''
  }
}

export const testBotListResponse: API.BotListResponse = {
  success: true,
  message: null,
  code: "0",
  data: {
    storageTokensUseNum: 0,
    messageTokensUseNum: 0,
    botNum: 3,
    storageTokensTotalNum: 60000,
    messageTokensTotalNum: 8000,
    bitList: [
      {
        id: "20b66906-7c97-4070-b568-06315c56ddc5",
        botName: 'botName01',
        status: "1",
        apiId: "213ca344-c3ad-458f-929d-83640d0531ad",
        storageTokens: 0,
        messageTokens: 0,
        createdAtString: "07/12/2023 11:31",
        createdAt: "2023-07-12T03:31:22.132889Z"
      },
      {
        id: "ba77f32d-da36-4a79-b1bc-48b3114f01f0",
        botName: 'botName02',
        status: "2",
        apiId: "213ca344-c3ad-458f-929d-83640d0531ad",
        storageTokens: 0,
        messageTokens: 0,
        createdAtString: "07/12/2023 11:31",
        createdAt: "2023-07-12T03:31:22.132889Z"
      },
      {
        id: "dbd7510c-c3bb-4888-bd6a-0cbf63af7a97",
        botName: 'botName03',
        status: "3",
        apiId: "213ca344-c3ad-458f-929d-83640d0531ad",
        storageTokens: 0,
        messageTokens: 0,
        createdAtString: "07/12/2023 11:31",
        createdAt: "2023-07-12T03:31:22.132889Z"
      },
      {
        id: "dbd7510c-c3bb-4888-bd6a-0cbf63af7a97",
        botName: 'botName03',
        status: "3",
        apiId: "213ca344-c3ad-458f-929d-83640d0531ad",
        storageTokens: 0,
        messageTokens: 0,
        createdAtString: "07/12/2023 11:31",
        createdAt: "2023-07-12T03:31:22.132889Z"
      },
      {
        id: "dbd7510c-c3bb-4888-bd6a-0cbf63af7a97",
        botName: 'botName03',
        status: "3",
        apiId: "213ca344-c3ad-458f-929d-83640d0531ad",
        storageTokens: 0,
        messageTokens: 0,
        createdAtString: "07/12/2023 11:31",
        createdAt: "2023-07-12T03:31:22.132889Z"
      },
      {
        id: "dbd7510c-c3bb-4888-bd6a-0cbf63af7a97",
        botName: 'botName03',
        status: "3",
        apiId: "213ca344-c3ad-458f-929d-83640d0531ad",
        storageTokens: 0,
        messageTokens: 0,
        createdAtString: "07/12/2023 11:31",
        createdAt: "2023-07-12T03:31:22.132889Z"
      },
      {
        id: "dbd7510c-c3bb-4888-bd6a-0cbf63af7a97",
        botName: 'botName03',
        status: "3",
        apiId: "213ca344-c3ad-458f-929d-83640d0531ad",
        storageTokens: 0,
        messageTokens: 0,
        createdAtString: "07/12/2023 11:31",
        createdAt: "2023-07-12T03:31:22.132889Z"
      }
    ]
  }
}
