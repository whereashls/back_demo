import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    // 存储用户信息
    saveUserInfo () {

    },
    // 移除用户信息
    removeUserInfo () {}
  }
  // actions: {
  // },
  // modules: {
  // }
})
