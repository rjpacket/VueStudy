<template>
  <div id="app">
    <router-view></router-view>
    <m-tabbar v-model="select">
      <m-tabbar-item id="Home" isRouter>
        <img src="./assets/images/nav_02.png" alt="" slot="icon-normal">
        <img src="./assets/images/nav_01.png" alt="" slot="icon-active">
        首页
      </m-tabbar-item>
      <m-tabbar-item id="OpenPrize" isRouter>
        <img src="./assets/images/nav_04.png" alt="" slot="icon-normal">
        <img src="./assets/images/nav_03.png" alt="" slot="icon-active">
        开奖
      </m-tabbar-item>
      <m-tabbar-item id="GenDan" isRouter>
        <img src="./assets/images/nav_06.png" alt="" slot="icon-normal">
        <img src="./assets/images/nav_05.png" alt="" slot="icon-active">
        跟单
      </m-tabbar-item>
      <m-tabbar-item id="HeMai" isRouter>
        <img src="./assets/images/nav_08.png" alt="" slot="icon-normal">
        <img src="./assets/images/nav_07.png" alt="" slot="icon-active">
        合买
      </m-tabbar-item>
      <m-tabbar-item id="Mine" isRouter>
        <img src="./assets/images/nav_10.png" alt="" slot="icon-normal">
        <img src="./assets/images/nav_09.png" alt="" slot="icon-active">
        我的
      </m-tabbar-item>
    </m-tabbar>
  </div>
</template>

<script>
import mTabbar from './components/tabbar'
import mTabbarItem from './components/tabbar-item'

export default {
  name: 'app',
  components: {
    mTabbar,
    mTabbarItem
  },
  data () {
    return {
      select: 'Home'
    }
  }
}
</script>

<style>


</style>
