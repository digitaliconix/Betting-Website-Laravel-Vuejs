export default [
    {
        path: '/client-orders',
        name: 'view-client-orders',
        component: () => import('../views/ClientOrder/index'),
        meta: {
            pageTitle: 'Home',
            breadcrumb: [
                {
                    text: 'Client Orders',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/client-orders/:id',
        name: 'view-client-order-details',
        component: () => import('../views/ClientOrder/show'),
        meta: {
            pageTitle: 'Client',
            breadcrumb: [
                {
                    text: 'Client Order Detail',
                    active: true,
                },
            ],
        },
    },
]
