<template>
  <div class="m-artical-cell-wrap">
     <a href="javascript:;">
      <div class="m-artical-cell-top">
        <div class="m-artical-cell">
          <div class="m-cell-title m-ellipsis-2">
            <slot name="title"></slot>
          </div>
          <div class="m-cell-detail m-ellipsis-2">
            <slot name="desc"></slot>
          </div>
        </div>
        <div class="m-pull-right right-img" :style="{'background-image':'url(' + img + ')'}">

        </div>
      </div>

      <div class="m-artical-cell-bottom">
        <p v-if="author">作者：{{ author }}</p>
        <p v-if="column">{{ column }}</p>
      </div>
     </a>
  </div>
</template>

<script>
export default {
  props: ['author', 'column', 'img']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.m-artical-cell-wrap{
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  position: relative;
  a:link{
    color: #000;
    text-decoration: none;
  }
  &:after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    background: #eee;
    transform: scaleY(0.5);
  }
  .m-artical-cell-top{
    display: flex;
    flex-direction: row;
    .m-artical-cell{
      flex: 1;
      padding-right: 45px;
    }
    .m-cell-title{
      font-size: 17px;
      line-height: 22px;
      color: #333;
      font-weight: bold;
    }
    .m-cell-detail{
      font-size: 12px;
      padding-top: 12px;
      color: #999;
    }
    .m-pull-right{
      width: 94px;
      height: 94px;
      overflow: hidden;
      background-position: center center;
      background-size: cover;
      img{
        width: 100%;
      }
    }
  }
  .m-artical-cell-bottom{
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    margin-top: 12px;
    color: #bbb;
    position: relative;
    p{
      font-size: 12px;
    }
    &:before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: #eee;
    }
  }
}
</style>
