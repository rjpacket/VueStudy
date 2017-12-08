<template>
  <div class="m-cell">
     <div class="m-cell-title">
      <slot name="icon"></slot>{{ title }}
     </div>
     <div class="m-cell-right">
      <slot name="cell-right"></slot>
     </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.m-cell{
  position: relative;
  padding: 10px 15px 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:before{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    background: #eee;
    transform: scaleY(0.5);
  }
  .m-cell-title{
    font-size: 15px;
    img{
      width: 20px;
      width: 20px;
    }
  }
  .m-cell-right{
    font-size: 12px;
    a{
      color: #666;
    }
    img{
      width: 20px;
      height: 20px;
    }
  }
}
</style>
