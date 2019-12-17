import Vue from 'vue'
import Dialog from './index.vue'

Vue.prototype.$dialog = () => {
  const id = 'custom-dialog'
  const div = document.createElement('div')
  div.id = id
  document.body.appendChild(div)

  // 注册组件
  const DialogComponent = Vue.extend(Dialog)

  // 实例化
  const DialogInstant = new DialogComponent()

  // 挂载
  DialogInstant.$mount(`#${id}`)

  DialogInstant.show()
}
// Vue.prototype.$dialog = (options) => {
//   // 组件构造器
//   const DialogComponent = Vue.extend(Dialog)

//   // 实例化组件
//   const DialogInstant = new DialogComponent()

//   // 创建容器节点并且添加到body
//   const id = 'custom-dialog'
//   const el = document.createElement('div')
//   el.id = id
//   document.body.appendChild(el)

//   // 挂载进入HTML
//   DialogInstant.$mount(`#${id}`)

//   // 显示
//   DialogInstant.show(options)

//   console.log('弹出来')
// }
