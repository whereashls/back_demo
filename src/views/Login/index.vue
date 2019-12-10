<template>
  <div class="login">
    <div class="box">
      <div ref="sb-title">学生管理系统</div>
      <el-form ref="login-form" :model="formDate" :rules="formRules">
        <!-- 账号 -->
        <el-form-item label="账号" prop="username">
          <el-input v-model="formDate.username"></el-input>
        </el-form-item>

        <!-- 密码 -->
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="formDate.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button class="button" type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formDate: {
        username: '',
        password: ''
      },
      formRules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    onSubmit () {
      const loginForm = this.$refs['login-form']
      // console.log(this.$refs)
      // console.log(loginForm)
      loginForm.validate().then(() => {
        console.log('通过验证')
      }).catch(() => {
        console.log('验证失败，有数据没填写')
      })
    }
  }
}
</script>

<style scoped>
.login{
  height: 100vh;
  width: 100vw;
  background-image: url("../../assets/images/login.jpg");
  background-size: cover;
  background-repeat:no-repeat;
  background-position:center;
  overflow: hidden;
  display:flex;
  justify-content: center;
  align-items: center
}
.login .box{
  width:300px;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 8px 1px #dedede;

}
.login .box .button{
  width: 100%;
  margin-top: 20px;
}
</style>
