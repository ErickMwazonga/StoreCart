// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import some global styles
// import './styles/style.scss'
require('./styles/style.scss')

require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss')
// import global libs
// import '../node_modules/bootstrap/dist/js/bootstrap'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
