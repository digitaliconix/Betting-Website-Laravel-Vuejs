import Vue from 'vue'
import VueRouter from 'vue-router'
import ToastificationContent from "@core/components/toastification/ToastificationContent";
import clients from "@/admin/router/clients";
import game_categories from "@/admin/router/game_categories";
import teams from "@/admin/router/teams";
import blogs from "@/admin/router/blogs";
import packages from "@/admin/router/packages";
import competitions from "@/admin/router/competitions";
import configurations from "@/admin/router/configurations";
import shop_categories from "@/admin/router/shop_categories";
import shop_products from "@/admin/router/shop_products";
import client_bettings from "@/admin/router/client_bettings";
import client_orders from "@/admin/router/client_orders";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: '/admin',
    scrollBehavior() {
        return {x: 0, y: 0}
    },
    routes: [
        {
            path: '/',
            name: 'view-home',
            component: () => import('../views/Home.vue'),
            meta: {
                pageTitle: 'Home',
                breadcrumb: [
                    {
                        text: 'Home',
                        active: true,
                    },
                ],
            },
        },
        // {
        //     path: '/inquiries',
        //     name: 'view-inquiries',
        //     component: () => import('../views/Inquiry/index'),
        //     meta: {
        //         pageTitle: 'Inquiries',
        //         breadcrumb: [
        //             {
        //                 text: 'Inquiries',
        //                 active: true,
        //             },
        //         ],
        //     },
        // },
        {
            path: '/users',
            name: 'view-users',
            component: () => import('../views/Settings/Users/index'),
            meta: {
                pageTitle: 'Users',
                breadcrumb: [
                    {
                        text: 'Settings',
                    },
                    {
                        text: 'Users',
                        active: true,
                    },
                ],
            },
        },
        {
            path: '/users/create',
            name: 'create-users',
            component: () => import('../views/Settings/Users/form'),
            meta: {
                pageTitle: 'Users',
                breadcrumb: [
                    {
                        text: 'Settings'
                    },
                    {
                        text: 'Users Create',
                        active: true,
                    },
                ],
            },
        },
        {
            path: '/users/:id/edit',
            name: 'edit-users',
            component: () => import('../views/Settings/Users/form'),
            meta: {
                mode: 'edit',
                pageTitle: 'Users',
                breadcrumb: [
                    {
                        text: 'Settings',
                        to: '/users'
                    },
                    {
                        text: 'Users Edit',
                        active: true,
                    },
                ],
            },
        },
        {
            path: '/roles',
            name: 'view-roles',
            component: () => import('../views/Settings/Roles/index'),
            meta: {
                pageTitle: 'Roles',
                breadcrumb: [
                    {
                        text: 'Settings'
                    },
                    {
                        text: 'Roles',
                        active: true,
                    },
                ],
            },
        },
        {
            path: '/roles/create',
            name: 'create-roles',
            component: () => import('../views/Settings/Roles/form'),
            meta: {
                pageTitle: 'Roles',
                breadcrumb: [
                    {
                        text: 'Settings'
                    },
                    {
                        text: 'Roles',
                    },
                    {
                        text: 'Create',
                        active: true,
                    },
                ],
            },
        },
        {
            path: '/roles/:id/edit',
            name: 'edit-roles',
            component: () => import('../views/Settings/Roles/form'),
            meta: {
                mode: 'edit',
                pageTitle: 'Roles',
                breadcrumb: [
                    {
                        text: 'Settings'
                    },
                    {
                        text: 'Roles',
                        link: '/roles'
                    },
                    {
                        text: 'Roles Edit',
                        active: true,
                    },
                ],
            },
        },
        {
            path: '/update-profile',
            name: 'view-update-profile',
            component: () => import('../views/Profile'),
            meta: {
                pageTitle: 'Profile',
                breadcrumb: [
                    {
                        text: 'Update',
                        active: true,
                    },
                ],
            },
        },
        ...clients,
        ...game_categories,
        ...teams,
        ...blogs,
        ...packages,
        ...competitions,
        ...configurations,
        ...shop_categories,
        ...shop_products,
        ...client_bettings,
        ...client_orders,
        {
            path: '/error-404',
            name: 'error-404',
            component: () => import('../../views/error/Error404.vue'),
            meta: {
                layout: 'full',
            },
        },
        {
            path: '/not-authorized',
            name: 'not-authorized',
            component: () => import('../../views/error/NotAuthorized.vue'),
            meta: {
                layout: 'full',
            },
        },
        {
            path: '*',
            redirect: 'error-404',
        },
    ],
})
// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
    // Remove initial loading
    const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = 'none'
    }
})

router.beforeEach((to, from, next) => {
    setTimeout(() => {
        if (to.name == 'error-404' || to.name == 'not-authorized' || to.name == 'view-home') {
            next()
        } else {
            let bool = false
            var permissions = window.apex.user.permissions;
            permissions.forEach(function (entry) {
                if (to.name === entry.name) {
                    bool = true
                }
            })
            if (bool) {
                next()
            } else {
                if (from.name === null) {
                    next({name: 'not-authorized'})
                } else {
                    Vue.$toast({
                        component: ToastificationContent,
                        props: {
                            title: 'Un-Authorized',
                            icon: 'BellIcon',
                            text: 'You Are Not Authorized',
                            variant: 'danger'
                        },
                    })
                }
            }
        }
    }, 10)
})

export default router
