import Toast from './Toast'

export default {
  install(Vue) {
    // 给Vue中扩展Toast, 生成toast构造器
    const CONSTRUCTOR = Vue.extend(Toast);
    // 创建toast对象
    let toast = new CONSTRUCTOR;
    // 挂载toast
    let vm = toast.$mount();
    document.querySelector('body').appendChild(vm.$el);
    Vue.prototype.$toast = toast;
  }
}