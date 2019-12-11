<template>
  <div class="app">
    <my-header></my-header>
    <div class="content">
      <div class="menu"></div>
      <div class="main"></div>
    </div>
  </div>
</template>

<script>
import MyHeader from '@/components/Header.vue'

export default {
  components: {
    MyHeader
  }
}
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.app .content {
  flex-grow: 1;
  display: flex;
}
.app .content .menu {
  width: 200px;
  border-right: 1px solid #ccc;
}
.app .content .main {
  flex-grow: 1;
}
</style>
