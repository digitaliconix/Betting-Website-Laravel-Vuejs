export default [
    {
        path: '/game-categories',
        name: 'view-game-categories',
        component: () => import('../views/GameCategory/index'),
        meta: {
            pageTitle: 'Home',
            breadcrumb: [
                {
                    text: 'Game Categories',
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
