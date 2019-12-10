<template>
  <div class="home">
    <my-header></my-header>
    <my-menu></my-menu>
  </div>
</template>

<script>
// @ is an alias to /src
import MyHeader from '@/components/Header.vue'
import MyMenu from '@/components/Menu.vue'

export default {
  name: 'home',
  components: {
    MyHeader,
    MyMenu
  }
}
</script>
