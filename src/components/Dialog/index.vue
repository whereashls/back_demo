<template>
  <el-dialog :title="title" :visible.sync="visible" @close="closed" :append-to-body="true">
    这是个弹框
  </el-dialog>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  },
  props: {
    title: String
  },
  methods: {
    show () {
      this.visible = true
    },
    hide () {
      this.visible = false
    },
    closed () {
      this.$destroy()
    }
  }
}
</script>
