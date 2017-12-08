import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import OpenPrize from '@/pages/OpenPrize'
import GenDan from '@/pages/GenDan'
import HeMai from '@/pages/HeMai'
import Mine from '@/pages/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/openPrize',
      name: 'OpenPrize',
      component: OpenPrize
    },
    {
      path: '/genDan',
      name: 'GenDan',
      component: GenDan
    },
    {
      path: '/heMai',
      name: 'HeMai',
      component: HeMai
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
