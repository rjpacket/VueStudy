<template>
  <div class="m-tabbar">
     <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['value'],
  computed: {
    value () {
      return this.$route.matched[0].name
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
  z-index: 9;
}
</style>
