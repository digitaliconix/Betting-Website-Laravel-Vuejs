export default [
    {
        path: '/shop-categories',
        name: 'view-shop-categories',
        component: () => import('../views/Shop/Category/index'),
        meta: {
            pageTitle: 'Home',
            breadcrumb: [
                {
                    text: 'Shop',
                },
                {
                    text: 'Categories',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/shop-categories/create',
        name: 'create-shop-categories',
        component: () => import('../views/Shop/Category/form'),
        meta: {
            pageTitle: 'Category',
            breadcrumb: [
                {
                    text: 'Shop',
                },
                {
                    text: 'Category Create',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/shop-categories/:id/edit',
        name: 'edit-shop-categories',
        component: () => import('../views/Shop/Category/form'),
        meta: {
            mode: 'edit',
            pageTitle: 'Category',
            breadcrumb: [
                {
                    text: 'Shop',
                },
                {
                    text: 'Category Detail',
                    active: true,
                },
            ],
        },
    },
]
