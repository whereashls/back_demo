import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'http://122.51.6.249:3001/'
})

// 请求拦截器
axios.interceptors.request.use(config => {
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