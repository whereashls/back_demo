<template>
  <div class="page">
    <div class="content">
      <div class="content-header">
        <span>共{{list.total}}条结果</span>
        <el-button  size="medium" type="primary">新增</el-button>
      </div>

      <el-table :data="list.data" border>
        <el-table-column prop="d_name" label="系别名称"></el-table-column>
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
