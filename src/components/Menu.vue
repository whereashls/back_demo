<template>
  <div class="menu">
    <el-menu :default-active="currentRouterName"
      class="el-menu-vertical"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <!-- 教师管理 -->
      <el-menu-item index="TeachersManagement" class="every">
        <i class="el-icon-s-custom"></i>
        <span slot="title">教师管理</span>
      </el-menu-item>

      <!-- 活动管理 -->
      <el-menu-item index="ActivityManagement">
        <i class="el-icon-magic-stick"></i>
        <span slot="title">活动管理</span>
      </el-menu-item>

      <!-- 学校组织管理 -->
      <el-menu-item index="SchoolOrganizationManagement">
        <i class="el-icon-files"></i>
        <span slot="title">学校组织管理</span>
      </el-menu-item>

      <!-- 用户帐号管理 -->
      <el-menu-item index="UserAccountManagement">
        <i class="el-icon-user"></i>
        <span slot="title">用户帐号管理</span>
      </el-menu-item>

      <!-- 审批活动 -->
      <el-menu-item index="ExaminationApproval">
        <i class="el-icon-receiving"></i>
        <span slot="title">审批活动</span>
      </el-menu-item>

      <!-- 学生干部管理 -->
      <el-menu-item index="StudentCadreManagement">
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
    handleSelect (key) {
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
  height: 100%;
  background-color:rgb(26, 24, 24);
}
.menu .el-menu-vertical {
  height: 100%;

}

</style>
