import Vue from 'vue'
import Router from 'vue-router'

import Main from '../views/Main'
import Dashboard from '../views/Dashboard'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/profile',
      redirect: {path: '/profile/personal-information'},
      component: Main,
    },
    {
      path: '/profile/personal-information',
      name: 'personal-information',
      component: Dashboard
    },
    {
      path: '/profile/education',
      name: 'education',
      component: Main
    },
    {
      path: '/profile/interested-subjects',
      name: 'interested-subjects',
      component: Main
    },
    {
      path: '/profile/certified-topics',
      name: 'certified-topics',
      component: Main
    },
    {
      path: '/class',
      component: Main,
      children: [
        {
          path: 'scheduled',
          name: 'scheduled',
          component: Main
        },
        {
          path: 'recommended',
          name: 'recommended',
          component: Main
        },
        {
          path: 'requested',
          name: 'requested',
          component: Main
        },
      ]
    },
    {
      path: '/goals',
      component: Main,
      children: [
        {
          path: 'progress',
          name: 'progress',
          component: Main
        },
        {
          path: 'future',
          name: 'future',
          component: Main
        }
      ]
    },
    {
      path: '/aham-credits',
      component: Main,
      children: [
        {
          path: 'balance',
          name: 'balance',
          component: Main
        },
        {
          path: 'history',
          name: 'history',
          component: Main
        },
        {
          path: 'statement',
          name: 'statement',
          component: Main
        }
      ]
    },
    {
      path: '/browse-catalogue',
      name: 'browse-catalogue',
      component: Main
    }
  ]
})

export default router
