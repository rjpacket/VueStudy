<template>
  <div>
    <m-header title="我的" :bg="true">
    </m-header>

    <div class="setting-container">
      <m-cell title="个人信息">
        <a href="javascript:;" slot="cell-right"><img src="../assets/images/right_arrow_gray.png" alt=""></a>
      </m-cell>

      <m-cell title="银行卡">
        <a href="javascript:;" slot="cell-right"><img src="../assets/images/right_arrow_gray.png" alt=""></a>
      </m-cell>

      <m-cell title="修改密码">
        <a href="javascript:;" slot="cell-right"><img src="../assets/images/right_arrow_gray.png" alt=""></a>
      </m-cell>

      <m-cell title="推送通知">
        <a href="javascript:;" slot="cell-right"><img src="../assets/images/right_arrow_gray.png" alt=""></a>
      </m-cell>

      <m-cell title="使用说明">
        <a href="javascript:;" slot="cell-right"><img src="../assets/images/right_arrow_gray.png" alt=""></a>
      </m-cell>

      <m-cell title="关于我们">
        <a href="javascript:;" slot="cell-right"><img src="../assets/images/right_arrow_gray.png" alt=""></a>
      </m-cell>
    </div>

  </div>
</template>

<script>
import mHeader from '../components/header'
import mCell from '../components/SettingCell'

export default {
  name: 'index',
  components: {
    mHeader,
    mCell
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.setting-container{
  margin-top: 50px;
}
</style>
