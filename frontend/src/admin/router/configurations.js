export default [
    {
        path: '/configurations',
        name: 'view-configurations',
        component: () => import('../views/Configuration/index'),
        meta: {
            pageTitle: 'Home',
            breadcrumb: [
                {
                    text: 'Configurations',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/configurations/:id/edit',
        name: 'edit-configurations',
        component: () => import('../views/Configuration/form'),
        meta: {
            mode: 'edit',
            pageTitle: 'Configuration',
            breadcrumb: [
                {
                    text: 'Configuration Detail',
                    active: true,
                },
            ],
        },
    },
]
