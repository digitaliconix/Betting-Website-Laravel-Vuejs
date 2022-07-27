export default [
    {
        path: '/blogs',
        name: 'view-blogs',
        component: () => import('../views/Blog/index'),
        meta: {
            pageTitle: 'Home',
            breadcrumb: [
                {
                    text: 'Blogs',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/blogs/create',
        name: 'create-blogs',
        component: () => import('../views/Blog/form'),
        meta: {
            pageTitle: 'Blog',
            breadcrumb: [
                {
                    text: 'Blog Create',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/blogs/:id/edit',
        name: 'edit-blogs',
        component: () => import('../views/Blog/form'),
        meta: {
            mode: 'edit',
            pageTitle: 'Blog',
            breadcrumb: [
                {
                    text: 'Blog Detail',
                    active: true,
                },
            ],
        },
    },
]
