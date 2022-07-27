export default [
    {
        path: '/shop-products',
        name: 'view-shop-products',
        component: () => import('../views/Shop/Product/index'),
        meta: {
            pageTitle: 'Home',
            breadcrumb: [
                {
                    text: 'Shop',
                },
                {
                    text: 'Products',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/shop-products/create',
        name: 'create-shop-products',
        component: () => import('../views/Shop/Product/form'),
        meta: {
            pageTitle: 'Product',
            breadcrumb: [
                {
                    text: 'Shop',
                },
                {
                    text: 'Product Create',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/shop-products/:id/edit',
        name: 'edit-shop-products',
        component: () => import('../views/Shop/Product/form'),
        meta: {
            mode: 'edit',
            pageTitle: 'Product',
            breadcrumb: [
                {
                    text: 'Shop',
                },
                {
                    text: 'Product Detail',
                    active: true,
                },
            ],
        },
    },
]
