import Vue from 'vue'
import router from './router'
import App from './App.vue'
import './assets/index.css'
import './assets/vue-range-slider.css'
document.title = 'TM generate image from video';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
