<template>
  <div>

  </div>
</template>

<script>
import { getUserList } from '@/api/user.js'
export default {
  created () {
    this.getStudents()
  },
  methods: {
    // 获取学生
    getStudents () {
      getUserList({
        all: true,
        role_id: 1
      }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
