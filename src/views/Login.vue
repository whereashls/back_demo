<template>
  <div class="login">
    <div class="box">
    <!-- 首先是第一个组件:el-form -->
    <!-- 再使用跟form组件配套的子组件 -->
    <!-- 然后 再使用输入框组件-->
    <!-- {{username}}{{password}} -->
    学生管理系统
        <el-form>
          <!-- 账号 -->
          <el-form-item label="账号">
            <el-input v-model="username"></el-input>
          </el-form-item>

          <!-- 密码 -->
          <el-form-item label="密码">
            <el-input v-model="password"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {
      alert('submit!')
    }
  }
}
</script>

<style scoped>
.login{
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/images/login.jpg");
  background-size: cover;
  background-repeat:no-repeat;
  background-position:center;
  overflow: hidden;
  display:flex;
  justify-content: center;
  align-items: center
}
.login .box{
  /* width: 200px;
  height: 200px; */
  width:300px;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 8px 1px #dedede;

}
</style>
