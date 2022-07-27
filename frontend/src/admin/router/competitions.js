export default [
    {
        path: '/competitions',
        name: 'view-competitions',
        component: () => import('../views/Competition/index'),
        meta: {
            pageTitle: 'Home',
            breadcrumb: [
                {
                    text: 'Competitions',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/competitions/create',
        name: 'create-competitions',
        component: () => import('../views/Competition/form'),
        meta: {
            pageTitle: 'Competition',
            breadcrumb: [
                {
                    text: 'Competition Create',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/competitions/:id/edit',
        name: 'edit-competitions',
        component: () => import('../views/Competition/form'),
        meta: {
            mode: 'edit',
            pageTitle: 'Competition',
            breadcrumb: [
                {
                    text: 'Competition Detail',
                    active: true,
                },
            ],
        },
    },
]
