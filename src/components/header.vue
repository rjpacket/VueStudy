<template>
  <div class="m-header" :class="{'is-bg':bg,'is-fixed':fixed}">
     <div class="m-header-button is-left">
      <slot name="left"></slot>
     </div>

     <h1 class="m-header-title" v-text="title"></h1>

     <div class="m-header-button is-right">
      <slot name="right"></slot>
     </div>
  </div>
</template>

<script>
  export default{
    props: {
      title: {
        type: String,
        default: ''
      },
      bg: {
        type: Boolean,
        default: false
      },
      fixed: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../assets/less/var.less";
.m-header{
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 10px;
  background: #fff;
  color: rgb(73, 73, 73);
  border-bottom: 1px solid #eee;
  a{
    color: rgb(73, 73, 73);
  }
  .m-header-button{
    width: 70px;
    align-items: stretch;
    &.is-left{
      text-align: left;
    }
    &.is-right{
      text-align: right;
    }
    .m-icon-img{
      width: 20px;
      height: 20px;
    }
    .margin-right-10{
      margin-right: 10px;
    }
  }
  .m-header-title{
    flex: 1;
    text-align: center;
    font-size: 16px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  &.is-bg{
    background: #eb1c42;
    color: #fff;
    a{
      color: #fff;
    }
    .m-header-title{
      color: #fff;
    }
  }
  &.is-fixed{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
}
</style>
