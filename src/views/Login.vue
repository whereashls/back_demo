<template>
  <div class="login">
    <div class="box">

      <el-form>
        <!-- 账号 -->
        <el-form-item label="账号">
          <el-input v-model="username"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码">
          <el-input v-model="password"></el-input>
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
  background: white;
  padding: 30px;
}
</style>
