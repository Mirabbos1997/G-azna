import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import About from '@/views/about/About.vue';
import Adminstration from '@/views/adminstration/Adminstratsiya.vue';
import NotFound from '@/components/NotFound.vue';

const routerFactory = (i18n) => {
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'main',
        component: HomeView,
        meta: {
          titleKey: `O'zbekiston Respublikasi Iqtisodiyot va Moliya vazirligi | Subsidiyalar portali`
        },
        children: []
      },
      {
        path: '/about',
        name: 'About',
        component: About,
      },
      {
        path: '/adminstration',
        name: 'Adminstratsiya',
        component: Adminstration,
      },
      {
        path: '/:pathMatch(.*)*',
        component: NotFound,
        name: 'MainNotFound'
      }
    ]
  })

  router.beforeEach((to, from, next) => {
    if (to.meta.titleKey) {
      document.title = i18n.t(to.meta.titleKey)
    }
    next()
  })
  return router
}

export default routerFactory
