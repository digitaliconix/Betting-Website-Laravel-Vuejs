export default [
    {
        path: '/clients',
        name: 'view-clients',
        component: () => import('../views/Client/index'),
        meta: {
            pageTitle: 'Home',
            breadcrumb: [
                {
                    text: 'Clients',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/clients/:id',
        name: 'view-clients-details',
        component: () => import('../views/Client/show'),
        meta: {
            pageTitle: 'Client',
            breadcrumb: [
                {
                    text: 'Client Detail',
                    active: true,
                },
            ],
        },
    },
]
//     {
//         path: '/blogs/create',
//         name: 'create-blogs',
//         component: () => import('../views/Setup/Blog/form'),
//         meta: {
//             pageTitle: 'Blog',
//             breadcrumb: [
//                 {
//                     text: 'Setup',
//                 },
//                 {
//                     text: 'Blog Create',
//                     active: true,
//                 },
//             ],
//         },
//     },
//     {
//         path: '/blogs/:id/edit',
//         name: 'edit-blogs',
//         component: () => import('../views/Setup/Blog/form'),
//         meta: {
//             mode: 'edit',
//             pageTitle: 'Blog',
//             breadcrumb: [
//                 {
//                     text: 'Setup',
//                 },
//                 {
//                     text: 'Blog Detail',
//                     active: true,
//                 },
//             ],
//         },
//     },
// ]
