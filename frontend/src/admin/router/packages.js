export default [
    {
        path: '/packages',
        name: 'view-packages',
        component: () => import('../views/Package/index'),
        meta: {
            pageTitle: 'Home',
            breadcrumb: [
                {
                    text: 'Packages',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/packages/create',
        name: 'create-packages',
        component: () => import('../views/Package/form'),
        meta: {
            pageTitle: 'Package',
            breadcrumb: [
                {
                    text: 'Package Create',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/packages/:id/edit',
        name: 'edit-packages',
        component: () => import('../views/Package/form'),
        meta: {
            mode: 'edit',
            pageTitle: 'Package',
            breadcrumb: [
                {
                    text: 'Package Detail',
                    active: true,
                },
            ],
        },
    },
]
