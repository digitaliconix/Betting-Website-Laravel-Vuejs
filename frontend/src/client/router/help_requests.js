export default [
    {
        path: '/help_requests',
        name: 'view-help-requests',
        component: () => import('../views/HelpRequest/index'),
        meta: {
            pageTitle: 'Help Requests',
            breadcrumb: [
                {
                    text: 'Index',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/help_requests/create',
        name: 'create-help-requests',
        component: () => import('../views/HelpRequest/form'),
        meta: {
            pageTitle: 'Help Requests',
            breadcrumb: [
                {
                    text: 'Create',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/help_request_chat/:id',
        name: 'view-help-request-chat',
        component: () => import('../views/HelpRequest/chat'),
        meta: {
            pageTitle: 'Chat',
            breadcrumb: [
                {
                    text: 'Help Request',
                    active: true,
                },
            ],
        },
    },


]
