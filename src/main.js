import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css'

import Element from 'element-ui'
//
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import axios from 'axios'
// 数据字典
import dict from './components/Dict'

// 权限指令
import permission from './components/Permission'
import './assets/styles/element-variables.scss'
// global css
import './assets/styles/index.scss'

// 代码高亮
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'

import App from './App'
import store from './store'
import router from './router/routers'

import './assets/icons' // icon
import './router/index' // permission control
import 'echarts-gl'

import 'element-ui/lib/theme-chalk/display.css'

import Keycloak from 'keycloak-js'

Vue.use(VueHighlightJS)
Vue.use(mavonEditor)
Vue.use(permission)
Vue.use(dict)
Vue.use(Element, {
  size: Cookies.get('size') || 'small' // set element-ui default size
})

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.openLoading = function () {
  const loading = this.$loading({
    lock: true,
    text: '正在加载...',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.3)',
    target: '.sub-main',
    body: true,
    customClass: 'mask'
  })
  setTimeout(function () {
    loading.close()
  }, 5000)
  return loading
}

Vue.use(Element, {
  size: Cookies.get('size') || 'small' // set element-ui default size
})

Vue.config.productionTip = false

// keycloak init options
const initOptions = {
  url: process.env.VUE_APP_ITITOPTIONS_URL,
  // url: 'https://sso.sgmw.com.cn:6443/auth/',
  realm: process.env.VUE_APP_ITITOPTIONS_REALM,
  clientId: process.env.VUE_APP_ITITOPTIONS_CLIENTID,
  onLoad: process.env.VUE_APP_ITITOPTIONS_ONLOAD
}

const keycloak = Keycloak(initOptions)

keycloak.init({ onLoad: initOptions.onLoad, promiseType: 'native' }).then((authenticated) => {
  if (!authenticated) {
    window.location.reload();
  } else {
    Vue.prototype.$keycloak = keycloak
    // Vue.prototype.$store.commit('SETISLOGIN', true)
    console.log('Authenticated')
  }

  new Vue({
    render: h => h(App),
    router,
    store,
  }).$mount('#app')

  setInterval(() => {
    keycloak.updateToken(70).then((refreshed) => {
      if (refreshed) {
        console.log('Token refreshed');
      } else {
        console.log('Token not refreshed, valid for '
          + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
      }
    }).catch(error => {
      console.log('Failed to refresh token', error)
    })
  }, 60000)

}).catch(error => {
  console.log('Authenticated Failed', error)
})
