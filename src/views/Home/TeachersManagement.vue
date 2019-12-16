<template>
  <div class="page">
    <div class="content">
      <div class="content-header">
        <span>共{{list.total}}条结果</span>
        <el-button  @click="add" size="medium" type="primary">新增</el-button>
      </div>

      <el-table :data="list.data" border v-loading="list.loading">
        <el-table-column prop="user_name" label="教师名称"></el-table-column>
       <el-table-column prop="user_id" label="教师工号"></el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button size="mini" @click="update(scope.row.id)">编辑</el-button>
            <el-button size="mini" type="danger" @click="remove(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

          <el-pagination
        class="pagination"
        background
        layout="prev, pager, next"
        :current-page="list.page"
        :page-size="list.pageSize"
        :total="list.total"
        @current-change="pageChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getTeacherList } from '@/api/teacher.js'
export default {
  data () {
    return {
      list: {
        data: [],
        pageSize: 11,
        page: 1,
        total: 0,
        loading: false
      }
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      if (this.list.loading) return false
      this.list.loading = true
      getTeacherList({
      // 控制分页
        all: true, // 是否获取全部用户
        page: 1, // 从第几页开始，默认为1,
        page_size: 10, // 一页包含多少条用户信息，默认为10

        // 查询条件
        user_id: localStorage.getItem('user_id'),
        role_id: 3 // 根据身份id  用户类型是固定的
      // 1 学生 2 学生干部 3 指导老师 4 管理员
      }).then((res) => {
        console.log(res)
        console.log(res.rows)
        this.list.data = res.rows
        this.list.total = res.count
      }).finally(() => {
        this.list.loading = false
      })
    },
    // 新增
    add () {
      // this.$confirm
      // this.$dialog
      this.$confirm({
        name: 'Teacher',
        options: {
          title: '新增教师'
        },
        params: {
          type: 1
        },
        methods: {
          done: () => {
            this.getList()
          }
        }
      })
    },
    // 选择页数
    pageChange (current) {
      this.list.page = current
      this.getList()
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
.page .content .pagination {
  margin-top: 20px;
  text-align: center;
}
.page .content .null {
  color: #aaa;
}
</style>
