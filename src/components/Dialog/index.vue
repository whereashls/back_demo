<template>
  <el-dialog :title="title" :visible.sync="visible" @close="closed" :append-to-body="true">
     <components ref="content" :is="name" v-bind="contentPropsData" @hide='hide'></components>
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
    // 内容传递的参数
    contentPropsData: Object
  },
  methods: {
    show ({ methods }) {
      this.visible = true

      console.log(this.$refs.content)
      // const contentComponent = this.$refs.content
      // console.log(contentComponent)

      // $nextTick里面是在下一次事件循环的时候执行的
      // 在下一次事件循环的时候，内容组件已经被挂载了
      this.$nextTick(() => {
        // console.log(this.$refs.content)
        for (let key in methods) {
          // 用$on 把 方法绑定进去
          this.$refs.content.$on(key, methods[key])
        }
      })
      // for (let key in methods) {
      //   console.log(key)
      // }
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
