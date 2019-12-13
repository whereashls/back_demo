<template>
  <div class="page">
    <div class="content">
      <div class="content-header">
        <span>共{{list.total}}条结果</span>
        <el-button  size="medium" type="primary">新增</el-button>
      </div>

      <el-table :data="list.data" border>
        <el-table-column prop="d_name" label="学生干部"></el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button size="mini" @click="update(scope.row.id)">编辑</el-button>
            <el-button size="mini" type="danger" @click="remove(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: {
        data: [],
        tatol: 0,
        loading: false
      }
    }
  }
  // created () {
  //   this.getList()
  // }
}
</script>

<style scoped>
.page{
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.page .content{
  padding:15px;
  flex-grow: 1;
  background: rgba(243, 240, 240, 0.568);
}
.page .content .content-header{
  display: flex;
  justify-content: space-between;
  margin-bottom:20px;
  align-items: center; /* 垂直居中 */
}
</style>
