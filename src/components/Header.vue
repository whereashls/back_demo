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
  display:flex;
  justify-content:space-between;
  margin: 20px;
  border-bottom:1px solid rgb(194, 171, 171);
}
.header .left{
  font-size:18px;
}
.header .right{
  padding:10px;
}
.header .right .hello{
  margin-right:30px;
}

</style>
