import Vue from 'vue'
import VueRouter from 'vue-router'
import ToastificationContent from "@core/components/toastification/ToastificationContent";
import help_requests from "@/care_giver/router/help_requests";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: '/care_giver',
  scrollBehavior() {
    return { x: 0, y: 0 }
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

      {
          path: '/update-profile',
          name: 'view-update-profile',
          component: () => import('../views/Profile.vue'),
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
      ...help_requests,
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('../views/error/Error404.vue'),
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

router.beforeEach((to, from, next) => {
    setTimeout(()=>{
        if (to.name == 'error-404' || to.name == 'not-authorized' || to.name == 'view-home' ) {
            next()
        } else {
            let bool = false
            var permissions = window.apex.user.permissions;
            permissions.forEach(function(entry){
                if(to.name === entry.name){
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
                            variant:'danger'
                        },
                    })
                }
            }
        }
    },10)
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

export default router
