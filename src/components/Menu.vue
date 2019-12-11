<template>
  <div class="app">
    <el-menu class="menu">
      <!-- 教师管理 -->
      <el-menu-item index="TeachersManagement" class="every">
        <i class="el-icon-s-custom"></i>
        <span slot="title">教师管理</span>
      </el-menu-item>

      <!-- 活动管理 -->
      <el-menu-item index="ActivityManagement" class="every">
        <i class="el-icon-magic-stick"></i>
        <span slot="title">活动管理</span>
      </el-menu-item>

      <!-- 学校组织管理 -->
      <el-menu-item index="SchoolOrganizationManagement" class="every">
        <i class="el-icon-files"></i>
        <span slot="title">学校组织管理</span>
      </el-menu-item>

      <!-- 用户帐号管理 -->
      <el-menu-item index="UserAccountManagement" class="every">
        <i class="el-icon-user"></i>
        <span slot="title">用户帐号管理</span>
      </el-menu-item>

      <!-- 审批活动 -->
      <el-menu-item index="ExaminationApproval" class="every">
        <i class="el-icon-receiving"></i>
        <span slot="title">审批活动</span>
      </el-menu-item>

      <!-- 学生干部管理 -->
      <el-menu-item index="StudentCadreManagement" class="every">
        <i class="el-icon-user-solid"></i>
        <span slot="title">学生干部管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  computed: {
    currentRouterName () {
      return this.$router.name
    }
  },
  methods: {
    handSelect (key) {
      if (key === this.currentRouterName) return false
      this.$router.replace({
        name: key
      })
    }
  }
}
</script>

<style scoped>
.menu{
  width: 200px;
  background-color:#ddd;
}
.menu .every{
 border-bottom: 1px solid black;
 border-right: 1px solid black;
}

</style>
