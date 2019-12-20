<template>
  <div>
    <el-form v-if="detail" size="mini">
      <el-form-item label="活动标题:">{{ detail.activity_title }}</el-form-item>
      <el-form-item label="活动介绍:">{{ detail.activity_introduce }}</el-form-item>
      <el-form-item label="活动类别:">{{ detail.category.category_name }}</el-form-item>
      <el-form-item label="所属协会:">{{ detail.organization.organization_name }}</el-form-item>
      <el-form-item label="组织干部:">{{ detail.cadre.user_name }}</el-form-item>
      <el-form-item label="开始时间:">{{ detail.activity_startTime }}</el-form-item>
      <el-form-item label="结束时间:">{{ detail.activity_endTime }}</el-form-item>
      <el-form-item label="是否通过:">
        <span v-if="detail.passed">已通过</span>
        <span v-else>未通过</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getActivitiesDetail } from '@/api/activities.js'
export default {
  props: ['id'],
  data () {
    return {
      detail: null
    }
  },
  created () {
    this.getDetail()
  },
  methods: {
    // 获取详情
    getDetail () {
      getActivitiesDetail(this.id).then(res => {
        this.detail = res
        console.log(res)
      })
    }
  }
}
</script>
