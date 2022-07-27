export default [
    {
        path: '/client-bettings',
        name: 'view-client-bettings',
        component: () => import('../views/ClientBetting/index'),
        meta: {
            pageTitle: 'Home',
            breadcrumb: [
                {
                    text: 'Client Bettings',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/client-bettings/:id',
        name: 'view-client-betting-details',
        component: () => import('../views/ClientBetting/show'),
        meta: {
            pageTitle: 'Client',
            breadcrumb: [
                {
                    text: 'Client Betting Detail',
                    active: true,
                },
            ],
        },
    },
]
