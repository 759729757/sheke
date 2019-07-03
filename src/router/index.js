import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import About from '@/pages/about/aboutUs'
import Leader from '@/pages/about/leader'
import Committee from '@/pages/about/committee'
import Research from '@/pages/research/index'
import Events from '@/pages/events/index'
import Lecture from '@/pages/events/lecture'
import Service from '@/pages/service/index'

import Recruit from '@/pages/recruit/index'

import Organization from '@/pages/organization/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/about/leader',
      name: 'leader',
      component: Leader
    },
    {
      path: '/about/committee',
      name: 'committee',
      component: Committee
    },
    {
      path: '/organization',
      name: 'organization',
      component: Organization
    },
    {
      path: '/research',
      name: 'research',
      component: Research
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/events/lecture',
      name: 'lecture',
      component: Lecture
    },
    {
      path: '/recruit',
      name: 'recruit',
      component: Recruit
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    }


  ]
})
