import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import Directions from '@/views/directions/Directions.vue';
import DirectionsDetails from '@/views/directions/DirectionsDetails.vue';
import Login from '@/views/login/Login.vue';
import Cabinet from '@/views/cabinet/CabinetView.vue';
import CabinetMain from '@/views/cabinet/CabinetMain.vue';
import CabinetApps from '@/views/cabinet/apps/CabinetApps.vue';
import CabinetStatus from '@/views/cabinet/apps/CabinetStatus.vue';
import LegalCabinetFacture from '@/views/cabinet/legal/CabinetFacture.vue';
import LegalCabinetAppsView from '@/views/cabinet/legal/LegalCabinetAppsView.vue';
import LegalCabinetAppsMain from '@/views/cabinet/legal/LegalCabinetAppsMain.vue';
import LegalCabinetStatus from '@/views/cabinet/legal/LegalCabinetStatus.vue';
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
        path: '/login',
        name: 'Login',
        component: Login,
        children:[]
      },
      {
        path: '/directions',
        name: 'Directions',
        children:[
          {
            name: 'DirectionsList',
            path: ':type',
            component: Directions,
            children: [
              {
                name: 'DirectionsDetails',
                path: ':id',
                component: DirectionsDetails
              }
            ]
          }
        ]
      },
      {
        name: 'Cabinet',
        path: '/cabinet',
        component: Cabinet,
        redirect: '/cabinet/physical',
        children: [
          {
            path: 'physical',
            component: CabinetMain,
            name: 'CabinetMain'
          },
          {
            path: 'physical/apps',
            component: CabinetApps,
            name: 'CabinetApps'
          },
          {
            path: 'physical/status/:type',
            name: 'CabinetStatus',
            component: CabinetStatus
          },
          {
            name: 'LegalCabinetFacture',
            path: '/cabinet/legal/facture',
            component: LegalCabinetFacture
          },
          {
            name: 'LegalCabinetAppsView',
            path: '/cabinet/legal/apps/view',
            component: LegalCabinetAppsView
          },
          {
            name: 'LegalCabinetAppsMain',
            path: '/cabinet/legal/apps',
            component: LegalCabinetAppsMain
          },
          {
            path: '/cabinet/legal/status/:type',
            name: 'LegalCabinetStatus',
            component: LegalCabinetStatus
          },
          {
            path: ':pathMatch(.*)*',
            component: NotFound,
            name: 'CabinetNotFound'
          },
        ]
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
