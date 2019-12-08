<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import './assets/styles/reset.css'

export default {
  components: {

  }
}
</script>

<style lang="scss">

</style>
