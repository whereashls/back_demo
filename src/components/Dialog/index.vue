<template>
  <el-dialog :visible.sync="visible">
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
  methods: {
    show () {
      this.visible = true
    },
    hide () {
      this.visible = false
    }
  }
}
</script>
