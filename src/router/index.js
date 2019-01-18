import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '', name: 'Dashboard', component: () => import('../views/Dashboard') },
    {
      path: '/profile',
      component: () => import('../views/Main'),
      children: [
        {
          path: 'personal-information',
          name: 'personal-information',
          component: () => import('../views/Profile/PersonalInformation')
        },
        { path: 'education', name: 'education', component: () => import('../views/Profile/Education') },
        {
          path: 'interested-subjects',
          name: 'interested-subjects',
          component: () => import('../views/Profile/InterestedSubjects')
        },
        {
          path: 'certified-topics',
          name: 'certified-topics',
          component: () => import('../views/Profile/CertifiedTopics')
        }
      ]
    },
    {
      path: '/class',
      component: () => import('../views/Main'),
      children: [
        { path: 'scheduled', name: 'scheduled', component: () => import('../views/Main') },
        { path: 'recommended', name: 'recommended', component: () => import('../views/Main') },
        { path: 'requested', name: 'requested', component: () => import('../views/Main') }
      ]
    },
    {
      path: '/goals',
      component: () => import('../views/Main'),
      children: [
        { path: 'progress', name: 'progress', component: () => import('../views/Main') },
        { path: 'future', name: 'future', component: () => import('../views/Main') }
      ]
    },
    {
      path: '/aham-credits',
      component: () => import('../views/Main'),
      children: [
        { path: 'balance', name: 'balance', component: () => import('../views/Main') },
        { path: 'history', name: 'history', component: () => import('../views/Main') },
        { path: 'statement', name: 'statement', component: () => import('../views/Main') }
      ]
    },
    { path: '/browse-catalogue', name: 'browse-catalogue', component: () => import('../views/Main') }
  ]
})

export default router
