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
<<<<<<< HEAD
  align-items: center;
  border-bottom:1px solid rgb(194, 171, 171);
  padding: 0 20px;
=======
  height: 50px;
  align-items:center;
  padding:0 30px;
  border-bottom: 1px solid #ddd;
>>>>>>> afcccf338ae27c61df7e0718cefdd99e821a8a8e
}
.header .left{
  font-size:22px;
}
<<<<<<< HEAD
=======
.header .right{
  font-size:18px;
}
>>>>>>> afcccf338ae27c61df7e0718cefdd99e821a8a8e
.header .right .hello{
  padding-right:30px;
}
</style>
