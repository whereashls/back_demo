import axios from '@/plugins/axios'

// 获取列表
// params是post的参数
export const getUserList = params => axios({
  url: '/admin/api/users',
  method: 'get',
  params
})
