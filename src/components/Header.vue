<template>
  <div class="header">
    <div class="left">
      <span class="title">学生管理系统</span>
    </div>
    <div class="right">
      <span class="hello"><i class="el-icon-s-custom"></i>{{name}}</span>
      <span @click="exit" class="exit"><i class="el-icon-switch-button"></i>退出</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'Admin'
    }
  },
  methods: {
    exit () {}
  }
}
</script>

<style scoped>
.header{
  height: 60px;
  display:flex;
  justify-content:space-between;
  align-items: center;
  border-bottom:1px solid rgb(194, 171, 171);
  padding: 0 20px;
}
.header .left{
  font-size:18px;
}
.header .right .hello{
  margin-right:30px;
}
</style>
