import Axios from 'axios'

import store from '@/store'

const axios = Axios.create({
  baseURL: 'http://122.51.6.249:3001/'
})

// 请求拦截器
axios.interceptors.request.use(config => {
  let url = config.url.split('/')
  if (url[url.length] !== 'login') {
    // config.headers.common['Authorization'] = localStorage.getItem('token')
    // config.headers.common['Authorization'] = this.store.$state.getItem('token')
    config.headers.common['Authorization'] = store.state.user.token
    // config.headers.common['helloworld'] = 'hello'
    // console.log('store:')
    // console.log(store)
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
