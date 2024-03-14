import { defineMock } from 'umi';

export default defineMock({
  // login get token
  'POST /api/gstdev-identity/oauth2/token': (req, res) => {
    const headerAuthorization = req.header('Authorization');

    if (headerAuthorization === 'Basic cGFzc3dvcmQtY2xpZW50OmJsYWNrMTIz') {
      res.send({
        access_token: "eyJ4NXQjUzI1NiI6InhjMW03dlNoZ1ZDMnFIVnFHRG5tU1ZqWEdRU09FOVpSTDZiVzNqNXo4bkUiLCJraWQiOiJnc3RkZXYiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhNjgzYzIwMy01NDIyLTQ0YzQtYTg5Mi0yNjE3ODE3MzQzN2MiLCJhdWQiOiJwYXNzd29yZC1jbGllbnQiLCJuYmYiOjE2OTI2Njc0MTEsImlzcyI6Imh0dHA6Ly8zNC4xOTQuMTE3LjIzMzo4MTAxIiwiZXhwIjoxNjk1MjU5NDExLCJpYXQiOjE2OTI2Njc0MTF9.jQF9MeH0-vCvHCoZXtJ8SaTng_bIEdw2Q4eyhyNovOMoIsgTnApFr0BAFdIBWFYHTPJxn147gITq6MzKluqZQTEV14bAno5eLJG1ICezO3wqRjgZjDhiqYdAnhqY4yWH35HwlrNn6FNs8lksbcbeaGvsibEtEs_ZDwyYs5b8cPC7dBiDaf3iUUXsDmIgRPwnBvsvJHffe19jvmkX5FHyK1CLTM4GQT7_Sbx8UKksVeK5GSm2WghXpqWzkvJi5E3THpxA0K9m5J59fWjZvAiMqi-B6T1cgmA3VYFlYV6zZCFDh4b09XQ1OWuj8-i_nWFamlQ3MnDHjGib6J0nk4OXhA",
        expires_in: 2591999,
        refresh_token: "NIatsPgQnDBpbF7rQEH9nXaZWnwuJ47N6DD3iaFBMS72-wdmMoieY4DyIdJdv8YIwaznDMn6g8igVfdsRPbaPqaHqZgaqpUBpk2WVOKWcrxS9uHCDgk2G9qFOgSE3w56",
        token_type: "Bearer",
      });
    } else {
      return res.send({ status: 'error', header: headerAuthorization});
    }
  },
  // login success, get user info
  'POST /api/gstdev-system/current-login-information/add-by-token-current-login-information': (req, res) => {
    res.send({
      success: true,
      message: null,
      code: "0",
      data: {
        accountId: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
        tenantId: "1",
        tenantIdSelf: "1",
        tenant: {
          description: "0",
          tenantCode: "0",
          type: 0,
          parentId: "0",
          tenantName: "0",
          logo: "",
          id: "1",
          status: 1
        },
        currentLoginAccount: {
          type: "0",
          createdAt: "2022-12-24T02:50:16.802+00:00",
          deleted: 0,
          tenantId: "1",
          id: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
          user: {
            lastName: "superadmin",
            gender: 93,
            mobile: "13677152331",
            avatar: "http://dummyimage.com/100x100",
            createdAt: "2022-12-24T02:50:16.627+00:00",
            firstName: "dev",
            password: "",
            deleted: 0,
            id: "a683c203-5422-44c4-a892-26178173437c",
            email: "devsuperadmin@126.com",
            username: "devsuperadmin@126.com",
            status: 1
          }
        },
        currentLoginAccountUserPermissions: [
          {
            checkedMenuId: [

            ],
            code: "dashboard",
            updatedBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
            hidden: 1,
            tenantEnable: 1,
            sort: 1,
            platformUse: 0,
            type: 0,
            parentId: "0",
            createdAt: "2023-02-24T02:41:00.806+00:00",
            path: "/dashboard",
            createdBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
            name: "Dashboard",
            location: 1,
            id: "24fa7037-87a4-46bb-8596-137633951fc3",
            halfCheckedMenuId: [

            ],
            updatedAt: "2023-03-01T02:26:10.965+00:00",
            status: 1,
            usageType: 0
          },
          {
            checkedMenuId: [

            ],
            code: "customer.customer-accounts",
            updatedBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
            hidden: 1,
            icon: "customerAccounts",
            description: "Description",
            tenantEnable: 1,
            permission: "kl",
            sort: 2,
            platformUse: 1,
            type: 0,
            parentId: "0",
            url: "",
            createdAt: "2022-12-26T03:04:54.472+00:00",
            path: "/customer/index",
            createdBy: "15e4bd69-d9ec-4c6c-acdf-ab81dd2ee577",
            children: [
              {
                checkedMenuId: [

                ],
                code: "customer.index",
                updatedBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
                hidden: 1,
                tenantEnable: 1,
                sort: 1,
                platformUse: 0,
                type: 0,
                parentId: "1575438d-0ca9-4c60-abc4-09bf55aed8dd",
                createdAt: "2023-02-06T01:33:23.306+00:00",
                path: "/customer/index",
                createdBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
                name: "Customer List",
                location: 2,
                id: "46725f2b-b524-400b-b8b2-a15e86135f7d",
                halfCheckedMenuId: [

                ],
                updatedAt: "2023-02-06T01:47:20.259+00:00",
                status: 1,
                usageType: 1
              },
              {
                checkedMenuId: [

                ],
                code: "customer.add",
                updatedBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
                hidden: 1,
                tenantEnable: 1,
                sort: 2,
                platformUse: 0,
                type: 0,
                parentId: "1575438d-0ca9-4c60-abc4-09bf55aed8dd",
                createdAt: "2023-02-06T01:37:34.637+00:00",
                path: "/customer/add",
                createdBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
                name: "Customer Add",
                location: 2,
                id: "51b9c9f0-2e7e-4dbc-80ea-a4ca5d53e76f",
                halfCheckedMenuId: [

                ],
                updatedAt: "2023-02-06T01:47:28.461+00:00",
                status: 1,
                usageType: 1
              }
            ],
            name: "Customer Accounts",
            location: 1,
            id: "1575438d-0ca9-4c60-abc4-09bf55aed8dd",
            halfCheckedMenuId: [

            ],
            updatedAt: "2023-02-06T01:34:22.488+00:00",
            status: 1,
            usageType: 1
          },
          {
            checkedMenuId: [

            ],
            code: "payees",
            updatedBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
            hidden: 0,
            icon: "payees",
            description: "11",
            tenantEnable: 1,
            permission: "",
            sort: 3,
            platformUse: 0,
            type: 0,
            parentId: "0",
            url: "",
            createdAt: "2022-12-26T03:04:54.472+00:00",
            path: "/payees/index",
            createdBy: "15e4bd69-d9ec-4c6c-acdf-ab81dd2ee577",
            children: [
              {
                checkedMenuId: [

                ],
                code: "payees.index",
                updatedBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
                hidden: 1,
                tenantEnable: 1,
                sort: 1,
                platformUse: 0,
                type: 0,
                parentId: "597168a1-e071-48f5-97ad-e78b3f94f660",
                createdAt: "2023-01-15T04:58:14.988+00:00",
                path: "/payees/index",
                createdBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
                name: "Payees Index",
                location: 2,
                id: "63fa48d7-44b5-4fc9-b737-71309ef20292",
                halfCheckedMenuId: [

                ],
                updatedAt: "2023-01-15T05:39:32.928+00:00",
                status: 1,
                usageType: 0
              },
              {
                checkedMenuId: [

                ],
                code: "payees.customer",
                updatedBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
                hidden: 1,
                tenantEnable: 1,
                sort: 2,
                platformUse: 0,
                type: 0,
                parentId: "597168a1-e071-48f5-97ad-e78b3f94f660",
                createdAt: "2023-01-12T09:13:30.368+00:00",
                path: "/payees/customer",
                createdBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
                name: "Payees Customer",
                location: 2,
                id: "b3ff8a08-dd96-432c-889e-b78dea9eadff",
                halfCheckedMenuId: [

                ],
                status: 1,
                usageType: 0
              },
              {
                checkedMenuId: [

                ],
                code: "payees.list",
                updatedBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
                hidden: 1,
                tenantEnable: 1,
                sort: 4,
                platformUse: 0,
                type: 0,
                parentId: "597168a1-e071-48f5-97ad-e78b3f94f660",
                createdAt: "2023-01-15T08:44:10.797+00:00",
                path: "/payees/list",
                createdBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
                name: "Payees List",
                location: 2,
                id: "6a4e87b1-2175-4f91-a2cd-1fba90692a36",
                halfCheckedMenuId: [

                ],
                status: 1,
                usageType: 0
              }
            ],
            name: "Payees",
            location: 1,
            id: "597168a1-e071-48f5-97ad-e78b3f94f660",
            halfCheckedMenuId: [

            ],
            updatedAt: "2023-03-29T03:20:02.907+00:00",
            status: 1,
            usageType: 1
          },
          {
            checkedMenuId: [

            ],
            code: "invoice",
            updatedBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
            hidden: 0,
            icon: "invoice",
            description: "",
            tenantEnable: 1,
            permission: "",
            sort: 4,
            platformUse: 1,
            type: 0,
            parentId: "0",
            url: "",
            createdAt: "2022-12-26T03:04:54.472+00:00",
            path: "/invoice",
            createdBy: "15e4bd69-d9ec-4c6c-acdf-ab81dd2ee577",
            children: [
              {
                checkedMenuId: [

                ],
                code: "invoice.index",
                updatedBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
                hidden: 1,
                tenantEnable: 1,
                sort: 1,
                type: 0,
                parentId: "038c9df2-87ff-4a12-b96a-499fb0b03a22",
                createdAt: "2023-03-09T02:32:13.102+00:00",
                path: "/invoice/index",
                createdBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
                name: "invoice",
                location: 2,
                id: "b7218738-0997-40bb-bdbc-f609166ff595",
                halfCheckedMenuId: [

                ],
                status: 1,
                usageType: 0
              },
              {
                checkedMenuId: [

                ],
                code: "invoice.add",
                updatedBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
                hidden: 1,
                tenantEnable: 1,
                sort: 2,
                type: 0,
                parentId: "038c9df2-87ff-4a12-b96a-499fb0b03a22",
                createdAt: "2023-03-09T02:32:55.412+00:00",
                path: "/invoice/add",
                createdBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
                name: "invoice add",
                location: 2,
                id: "daddf934-7a37-4c24-88ff-69a7ca7066fe",
                halfCheckedMenuId: [

                ],
                status: 1,
                usageType: 0
              }
            ],
            name: "Invoice",
            location: 1,
            id: "038c9df2-87ff-4a12-b96a-499fb0b03a22",
            halfCheckedMenuId: [

            ],
            updatedAt: "2023-03-29T03:20:09.237+00:00",
            status: 1,
            usageType: 1
          },
          {
            checkedMenuId: [

            ],
            code: "sms",
            updatedBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
            hidden: 0,
            icon: "smsAutomation",
            description: "",
            tenantEnable: 1,
            permission: "",
            sort: 5,
            platformUse: 0,
            type: 0,
            parentId: "0",
            url: "",
            createdAt: "2022-12-26T03:04:54.472+00:00",
            path: "/sms",
            createdBy: "15e4bd69-d9ec-4c6c-acdf-ab81dd2ee577",
            name: "SMS Templates",
            location: 1,
            id: "f64eb963-293b-476d-8958-c434178349a4",
            halfCheckedMenuId: [

            ],
            updatedAt: "2023-04-19T02:51:47.756+00:00",
            status: 1,
            usageType: 1
          },
          {
            checkedMenuId: [

            ],
            code: "payment.console",
            updatedBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
            hidden: 0,
            icon: "paymentConsole",
            description: "",
            tenantEnable: 1,
            permission: "",
            sort: 6,
            platformUse: 0,
            type: 0,
            parentId: "0",
            url: "",
            createdAt: "2022-12-26T03:04:54.472+00:00",
            path: "/payment",
            createdBy: "15e4bd69-d9ec-4c6c-acdf-ab81dd2ee577",
            name: "Payment Console",
            location: 1,
            id: "fb6340be-2bd0-4be2-b8c1-51ee7804da9d",
            halfCheckedMenuId: [

            ],
            updatedAt: "2023-04-19T03:10:25.463+00:00",
            status: 1,
            usageType: 1
          },
          {
            checkedMenuId: [

            ],
            code: "analytics.analytics",
            updatedBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
            hidden: 0,
            icon: "analytics",
            description: "",
            tenantEnable: 1,
            permission: "",
            sort: 7,
            platformUse: 0,
            type: 0,
            parentId: "0",
            url: "",
            createdAt: "2022-12-26T03:04:54.472+00:00",
            path: "/analytics",
            createdBy: "15e4bd69-d9ec-4c6c-acdf-ab81dd2ee577",
            name: "Analytics",
            location: 1,
            id: "4b5250cf-ded6-4627-86ae-999de96107c1",
            halfCheckedMenuId: [

            ],
            updatedAt: "2023-01-05T04:36:15.482+00:00",
            status: 1,
            usageType: 1
          },
          {
            checkedMenuId: [

            ],
            code: "audit.log",
            updatedBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
            hidden: 1,
            icon: "audit",
            tenantEnable: 1,
            sort: 8,
            platformUse: 0,
            type: 0,
            parentId: "0",
            createdAt: "2023-04-17T03:29:46.589+00:00",
            path: "/audit",
            createdBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
            name: "Audit Log",
            location: 1,
            id: "bf2a56dd-ce9d-444a-8192-57670306fb8f",
            halfCheckedMenuId: [

            ],
            updatedAt: "2023-04-23T07:24:00.801+00:00",
            status: 1,
            usageType: 1
          },
          {
            checkedMenuId: [

            ],
            code: "access.access-control",
            updatedBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
            hidden: 0,
            tenantEnable: 1,
            sort: 12,
            platformUse: 0,
            type: 0,
            parentId: "0",
            createdAt: "2022-12-26T07:03:29.335+00:00",
            path: "/access",
            createdBy: "15e4bd69-d9ec-4c6c-acdf-ab81dd2ee577",
            children: [
              {
                checkedMenuId: [

                ],
                code: "tenant.tenant-list",
                updatedBy: "15e4bd69-d9ec-4c6c-acdf-ab81dd2ee577",
                hidden: 0,
                tenantEnable: 1,
                sort: 1,
                platformUse: 0,
                type: 0,
                parentId: "ab3ed04c-d5fc-476b-8f6f-a3b42acddaaf",
                createdAt: "2022-12-26T07:04:05.169+00:00",
                path: "/access/tenant",
                createdBy: "15e4bd69-d9ec-4c6c-acdf-ab81dd2ee577",
                name: "Tenant",
                location: 1,
                id: "5efb34c3-fc26-41dc-b920-1d05c00e2df7",
                halfCheckedMenuId: [

                ],
                status: 1,
                usageType: 0
              },
              {
                checkedMenuId: [

                ],
                code: "menu.menu-list",
                updatedBy: "15e4bd69-d9ec-4c6c-acdf-ab81dd2ee577",
                hidden: 0,
                tenantEnable: 1,
                sort: 2,
                platformUse: 0,
                type: 0,
                parentId: "ab3ed04c-d5fc-476b-8f6f-a3b42acddaaf",
                createdAt: "2022-12-26T07:04:59.872+00:00",
                path: "/access/menu",
                createdBy: "15e4bd69-d9ec-4c6c-acdf-ab81dd2ee577",
                name: "menu",
                location: 1,
                id: "ac38ddd2-0556-40da-ab88-194e315a7dc7",
                halfCheckedMenuId: [

                ],
                status: 1,
                usageType: 0
              },
              {
                checkedMenuId: [

                ],
                code: "organize.organize-list",
                updatedBy: "15e4bd69-d9ec-4c6c-acdf-ab81dd2ee577",
                hidden: 0,
                tenantEnable: 1,
                sort: 3,
                platformUse: 0,
                type: 0,
                parentId: "ab3ed04c-d5fc-476b-8f6f-a3b42acddaaf",
                createdAt: "2022-12-26T07:06:07.810+00:00",
                path: "/access/organize",
                createdBy: "15e4bd69-d9ec-4c6c-acdf-ab81dd2ee577",
                name: "Organize",
                location: 1,
                id: "6d63a2e7-7932-4cf3-9ea2-bc224638028d",
                halfCheckedMenuId: [

                ],
                status: 1,
                usageType: 0
              },
              {
                checkedMenuId: [

                ],
                code: "role.role-list",
                updatedBy: "15e4bd69-d9ec-4c6c-acdf-ab81dd2ee577",
                hidden: 0,
                tenantEnable: 1,
                sort: 4,
                platformUse: 0,
                type: 0,
                parentId: "ab3ed04c-d5fc-476b-8f6f-a3b42acddaaf",
                createdAt: "2022-12-26T07:06:41.939+00:00",
                path: "/access/role",
                createdBy: "15e4bd69-d9ec-4c6c-acdf-ab81dd2ee577",
                name: "Role",
                location: 1,
                id: "93105ec7-8d22-4d9a-b314-9db4a61fbd99",
                halfCheckedMenuId: [

                ],
                status: 1,
                usageType: 0
              },
              {
                checkedMenuId: [

                ],
                code: "account.account-list",
                updatedBy: "15e4bd69-d9ec-4c6c-acdf-ab81dd2ee577",
                hidden: 0,
                tenantEnable: 1,
                sort: 5,
                platformUse: 0,
                type: 0,
                parentId: "ab3ed04c-d5fc-476b-8f6f-a3b42acddaaf",
                createdAt: "2022-12-26T07:07:57.025+00:00",
                path: "/access/account",
                createdBy: "15e4bd69-d9ec-4c6c-acdf-ab81dd2ee577",
                name: "Account",
                location: 1,
                id: "3315597b-5248-42f9-b692-e2fac76939ea",
                halfCheckedMenuId: [

                ],
                status: 1,
                usageType: 0
              },
              {
                checkedMenuId: [

                ],
                code: "user.user-list",
                updatedBy: "15e4bd69-d9ec-4c6c-acdf-ab81dd2ee577",
                hidden: 0,
                tenantEnable: 1,
                sort: 6,
                platformUse: 0,
                type: 0,
                parentId: "ab3ed04c-d5fc-476b-8f6f-a3b42acddaaf",
                createdAt: "2022-12-26T07:08:37.641+00:00",
                path: "/access/user-list",
                createdBy: "15e4bd69-d9ec-4c6c-acdf-ab81dd2ee577",
                name: "User",
                location: 1,
                id: "f8cee17e-cfb2-48f3-9450-d3623b5dd684",
                halfCheckedMenuId: [

                ],
                status: 1,
                usageType: 0
              },
              {
                checkedMenuId: [

                ],
                code: "dict.dict-list",
                updatedBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
                hidden: 0,
                tenantEnable: 1,
                sort: 7,
                platformUse: 0,
                type: 0,
                parentId: "ab3ed04c-d5fc-476b-8f6f-a3b42acddaaf",
                createdAt: "2022-12-26T07:09:30.309+00:00",
                path: "/access/dict",
                createdBy: "15e4bd69-d9ec-4c6c-acdf-ab81dd2ee577",
                name: "Dictionary",
                location: 1,
                id: "81f81dff-fb7b-40a4-9898-10ebabbdf5b4",
                halfCheckedMenuId: [

                ],
                updatedAt: "2023-02-08T02:25:33.973+00:00",
                status: 1,
                usageType: 0
              }
            ],
            name: "Access Control",
            location: 1,
            id: "ab3ed04c-d5fc-476b-8f6f-a3b42acddaaf",
            halfCheckedMenuId: [

            ],
            updatedAt: "2023-01-05T04:34:56.490+00:00",
            status: 1,
            usageType: 0
          },
          {
            checkedMenuId: [

            ],
            code: "settings",
            updatedBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
            hidden: 0,
            icon: "settings",
            tenantEnable: 1,
            sort: 13,
            platformUse: 0,
            type: 0,
            parentId: "0",
            createdAt: "2022-12-26T06:59:33.536+00:00",
            path: "/settings/users/profile",
            createdBy: "15e4bd69-d9ec-4c6c-acdf-ab81dd2ee577",
            children: [
              {
                checkedMenuId: [

                ],
                code: "settings.profile",
                updatedBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
                hidden: 1,
                tenantEnable: 1,
                sort: 1,
                platformUse: 0,
                type: 0,
                parentId: "75b96b53-77ef-4bd6-8b80-d01ec4dfacba",
                createdAt: "2023-03-23T15:35:00.707+00:00",
                path: "/settings/users/profile",
                createdBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
                name: "Settings Profile",
                location: 2,
                id: "fe8c7887-a3a9-4ed2-8b7b-d9e63b257314",
                halfCheckedMenuId: [

                ],
                updatedAt: "2023-03-27T06:45:19.338+00:00",
                status: 1,
                usageType: 0
              },
              {
                checkedMenuId: [

                ],
                code: "settings.users",
                updatedBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
                hidden: 0,
                icon: "settings",
                tenantEnable: 1,
                sort: 2,
                platformUse: 0,
                type: 0,
                parentId: "75b96b53-77ef-4bd6-8b80-d01ec4dfacba",
                createdAt: "2022-12-26T07:01:52.558+00:00",
                path: "/settings/users",
                createdBy: "15e4bd69-d9ec-4c6c-acdf-ab81dd2ee577",
                name: "Settings users",
                location: 2,
                id: "3db7abe9-1536-4bd7-807c-fb4014f7664a",
                halfCheckedMenuId: [

                ],
                updatedAt: "2023-03-27T06:44:47.936+00:00",
                status: 1,
                usageType: 1
              },
              {
                checkedMenuId: [

                ],
                code: "settings.permissions",
                updatedBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
                hidden: 1,
                tenantEnable: 1,
                sort: 3,
                platformUse: 0,
                type: 0,
                parentId: "75b96b53-77ef-4bd6-8b80-d01ec4dfacba",
                createdAt: "2023-01-11T08:08:50.401+00:00",
                path: "/settings/users/editPermissions",
                createdBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
                name: "Settings User Permissions",
                location: 2,
                id: "9d5d74f0-73bd-421a-aa3c-7514141d258d",
                halfCheckedMenuId: [

                ],
                updatedAt: "2023-03-27T06:44:55.621+00:00",
                status: 1,
                usageType: 1
              },
              {
                checkedMenuId: [

                ],
                code: "settings.accountInfo",
                updatedBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
                hidden: 1,
                tenantEnable: 1,
                sort: 4,
                platformUse: 0,
                type: 0,
                parentId: "75b96b53-77ef-4bd6-8b80-d01ec4dfacba",
                createdAt: "2023-01-11T08:11:45.429+00:00",
                path: "/settings/accountInfo",
                createdBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
                name: "Account Info",
                location: 2,
                id: "c87032a9-6108-482b-9fe6-f002f246296f",
                halfCheckedMenuId: [

                ],
                updatedAt: "2023-03-27T06:45:05.925+00:00",
                status: 1,
                usageType: 1
              },
              {
                checkedMenuId: [

                ],
                code: "settings.paymentRails",
                updatedBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
                hidden: 1,
                tenantEnable: 1,
                sort: 5,
                platformUse: 0,
                type: 0,
                parentId: "75b96b53-77ef-4bd6-8b80-d01ec4dfacba",
                createdAt: "2023-01-11T08:10:08.126+00:00",
                path: "/settings/paymentRails/index",
                createdBy: "1104fe4f-dcb1-4b6f-94c6-6bbdfc900f8f",
                name: "Settings Payment Rails",
                location: 2,
                id: "8da77832-83a7-49c4-a854-971457687881",
                halfCheckedMenuId: [

                ],
                updatedAt: "2023-03-27T06:45:12.435+00:00",
                status: 1,
                usageType: 1
              }
            ],
            name: "Settings",
            location: 1,
            id: "75b96b53-77ef-4bd6-8b80-d01ec4dfacba",
            halfCheckedMenuId: [

            ],
            updatedAt: "2023-03-29T07:00:12.541+00:00",
            status: 1,
            usageType: 1
          }
        ]
      }
    });
  },
});
