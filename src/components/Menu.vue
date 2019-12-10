<template>
  <div class="menu">
    <el-menu
    :default-active="currentRouterName" class="el-menu-vertical" @select="handSelect"
    background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">

    <el-menu-item class="manage" index="RolesManagement">
      <i class="el-icon-s-custom"></i>
      <span slot="title">用户管理</span>
    </el-menu-item>

    <el-menu-item class="manage"  index="OrganizationManagement">
      <i class="el-icon-s-custom"></i>
      <span slot="title">组织管理</span>
    </el-menu-item>

     <el-menu-item class="manage" index="CategoriesManagement">
      <i class="el-icon-s-custom"></i>
      <span slot="title">活动分类管理</span>
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
  border-right: 1px solid #ddd;
}
.menu .el-menu-vertical{
  height: 100%;
  border-top:1px solid rgb(245, 242, 242);
}
.menu .el-menu-vertical .manage{
  height: 100%;
  border-top:1px solid rgb(245, 242, 242);
}
</style>
