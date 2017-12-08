<template>
  <div>
    <m-header title="跟单" :bg="true">
    </m-header>

    <div class="artical-container">
      <m-artical-cell author="任金鹏" column="今日头条" img="http://img.iuliao.com/display/c1c768dd49d15cdfeffb877af8ad8e0b">
        <span slot="title">洛杉矶湖人队VS费城76人</span>
        <span slot="desc">周五上午，NBA常规赛率先开打，届时费城76人队将主场迎战洛杉矶湖人队。</span>
      </m-artical-cell>

      <m-artical-cell author="任金鹏" column="今日头条" img="http://img.iuliao.com/display/c1c768dd49d15cdfeffb877af8ad8e0b">
        <span slot="title">洛杉矶湖人队VS费城76人</span>
        <span slot="desc">周五上午，NBA常规赛率先开打，届时费城76人队将主场迎战洛杉矶湖人队。</span>
      </m-artical-cell>

      <m-artical-cell author="任金鹏" column="今日头条" img="http://img.iuliao.com/display/c1c768dd49d15cdfeffb877af8ad8e0b">
        <span slot="title">洛杉矶湖人队VS费城76人</span>
        <span slot="desc">周五上午，NBA常规赛率先开打，届时费城76人队将主场迎战洛杉矶湖人队。</span>
      </m-artical-cell>

      <m-artical-cell author="任金鹏" column="今日头条" img="http://img.iuliao.com/display/c1c768dd49d15cdfeffb877af8ad8e0b">
        <span slot="title">洛杉矶湖人队VS费城76人</span>
        <span slot="desc">周五上午，NBA常规赛率先开打，届时费城76人队将主场迎战洛杉矶湖人队。</span>
      </m-artical-cell>
    </div>
  </div>
</template>

<script>
import mHeader from '../components/header'
import mArticalCell from '../components/ArticalCell'

export default {
  name: 'index',
  components: {
    mHeader,
    mArticalCell
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.artical-container{
  padding-top: 44px;
}
</style>
