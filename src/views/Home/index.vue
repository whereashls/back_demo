<template>
  <div class="app">
      <my-header class="my-header"></my-header>
      <div class="content">
        <my-menu class="menu-left"></my-menu>
        <div class="main-right">
        <router-view></router-view>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MyHeader from '@/components/Header'
import MyMenu from '@/components/Menu'

export default {
  components: {
    MyHeader
  }
}
</script>

<style scoped>
.app{
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.app .content{
  flex-grow:1;
  display: flex;
}
.app .content .menu-left{
  width: 200px;
  /* border-right: 1px solid rgb(156, 154, 154); */
  background:#fff;
}
.app .content .main-right{
  flex-grow: 1;
}
</style>
