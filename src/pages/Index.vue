<template>
  <div>
    <m-header title="众益彩票" :bg="true">
      <a slot="left"><img class="m-icon-img" src="../assets/images/common_back.png">返回</a>
      <a slot="right">分享</a>
    </m-header>

    <m-tabbar v-model="select">
      <m-tabbar-item id="tab1">
        <img src="../assets/images/nav_02.png" alt="" slot="icon-normal">
        <img src="../assets/images/nav_01.png" alt="" slot="icon-active">
        首页
      </m-tabbar-item>
      <m-tabbar-item id="tab2">
        <img src="../assets/images/nav_04.png" alt="" slot="icon-normal">
        <img src="../assets/images/nav_03.png" alt="" slot="icon-active">
        开奖
      </m-tabbar-item>
      <m-tabbar-item id="tab3">
        <img src="../assets/images/nav_06.png" alt="" slot="icon-normal">
        <img src="../assets/images/nav_05.png" alt="" slot="icon-active">
        跟单
      </m-tabbar-item>
      <m-tabbar-item id="tab4">
        <img src="../assets/images/nav_08.png" alt="" slot="icon-normal">
        <img src="../assets/images/nav_07.png" alt="" slot="icon-active">
        合买
      </m-tabbar-item>
      <m-tabbar-item id="tab5">
        <img src="../assets/images/nav_10.png" alt="" slot="icon-normal">
        <img src="../assets/images/nav_09.png" alt="" slot="icon-active">
        我的
      </m-tabbar-item>
    </m-tabbar>
  </div>
</template>

<script>
import mHeader from '../components/header'
import mTabbar from '../components/tabbar'
import mTabbarItem from '../components/tabbar-item'

export default {
  name: 'index',
  components: {
    mHeader,
    mTabbar,
    mTabbarItem
  },
  data () {
    return {
      select: 'tab1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.m-tabbar{
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    overflow: hidden;
    height: 50px;
    background: #fff;
    border-top: 1px solid #e4e4e4;

    .m-tabbar-item{
      flex: 1;
      text-align: center;
      .m-tabbar-item-icon{
          display: block;
          padding-top: 2px;
          img{
              width: 28px;
              height: 28px;
          }
      }
      .m-tabbar-item-text{
          display: block;
          font-size: 10px;
          color:#949494;
      }
      &.is-active{
          .m-tabbar-item-text{
              color: #42bd56;
          }
      }
  }
}
</style>
