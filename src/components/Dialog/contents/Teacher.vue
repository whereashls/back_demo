<template>
  <div>
    <span>{{teacherName}},{{age}}岁，性别:{{sex}}</span>
    <button @click="submit">提交</button>

    </div>
</template>

<script>
export default {
  // props 接收父组件传递的参数
  props: ['teacherName', 'age', 'sex'],
  methods: {
    submit () {
      this.$emit('sayHello')
      this.$emit('sayWorld')
    }
  }
}
</script>
