import Axios from 'axios'

import store from '@/store'

const axios = Axios.create({
  // baseUrl就是给你所用的请求加一个公共的路径
  baseURL: 'http://122.51.6.249:3001/'
})

// 请求拦截器
axios.interceptors.request.use(config => {
  if (config.url !== '/admin/api/users/login') {
    config.headers.common['Authorization'] = store.state.user.token
  }
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(response => {
  return response.data
}, error => {
  return Promise.reject(error)
})

export default axios
