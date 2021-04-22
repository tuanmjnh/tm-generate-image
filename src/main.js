import Vue from 'vue'
import router from './router'
import App from './App.vue'
import './assets/index.css'
import './assets/vue-range-slider.css'
document.title = 'TM generate image from video';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  created() {
    console.log('app version', process.env.VUE_APP_VERSION)
    if (sessionStorage.redirect) {
      const redirect = sessionStorage.redirect
      console.log('redirect', redirect)
      delete sessionStorage.redirect
      this.$router.push(redirect)
    }
  }
}).$mount('#app')
