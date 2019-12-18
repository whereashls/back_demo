<template>
  <el-dialog :title="title" :visible.sync="visible" @close="closed" :append-to-body="true">
     <components :is="name" v-bind="contentPropsData"></components>
  </el-dialog>
</template>

<script>

import Contents from './collection'

export default {
  components: {
    ...Contents
  },
  data () {
    return {
      visible: false
    }
  },
  // 在全局扩展里加入props进行接收
  props: {
    // 弹窗的标题
    title: String,
    // 弹窗的内容组件名称
    name: {
      type: String,
      required: true
    },
    // 内容传递参数
    contentPropsData: Object
  },
  methods: {
    show ({ methods }) {
      this.visible = true
      for (let key in methods) {
        console.log(key)
      }
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
