<template>
  <div>
    <m-header title="首页" :bg="true">
    </m-header>

    <div class="page-content">
        <m-swipe swipeid="swipe01" :autoplay="3000" effect="slide">
            <div class="swiper-slide" slot="swiper-con"><img src="../assets/images/01.jpg"></div>
            <div class="swiper-slide" slot="swiper-con"><img src="../assets/images/02.jpg"></div>
            <div class="swiper-slide" slot="swiper-con"><img src="../assets/images/03.jpg"></div>
        </m-swipe>
        <br><br><br><br><br><br><br><br><br><br><br><br>
        <a>为什么会有这么大的孔隙呢</a><a>为什么会有这么大的孔隙呢</a><a>为什么会有这么大的孔隙呢</a>
    </div>
  </div>
</template>

<script>
import mHeader from '../components/header'
import mSwipe from '../components/swipe'

export default {
  name: 'index',
  components: {
    mHeader,
    mSwipe
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
header.m-header {
  padding: 0 0 0 10px;
}

.is-fixed~.page-content{
  padding-top: 44px;
}

</style>
