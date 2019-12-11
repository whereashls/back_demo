<template>
  <div class="header">
    <div class="left">
      <span class="title">i活动后台管理系统</span>
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
  height: 50px;
  align-items:center;
  padding:0 30px;
  border-bottom: 1px solid #ddd;
}
.header .left{
  font-size:20px;
}
.header .right{
  font-size:16px;
}
.header .right .hello{
  padding-right:30px;
}

</style>
