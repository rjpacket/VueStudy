<template>
  <div class="login">
    <label>账号：<input v-model="name"></label><br>
    <br>
    <label>密码：<input v-model="password"></label>
    <br>
    <button v-on:click="login">登录</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      name: '',
      password: ''
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
