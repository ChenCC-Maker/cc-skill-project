import Vue from 'vue'
import App from './App.vue'
// 全局引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入router文件下默认暴露的router
import router from './router';

// 引入全局样式，其中包含全局动画样式
import '@/styles/index.scss'


Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
