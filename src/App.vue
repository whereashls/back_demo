<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import './assets/styles/reset.css'

export default {
  // components: {

  // }
  created () {
    this.$dialog()
  }
}
</script>
