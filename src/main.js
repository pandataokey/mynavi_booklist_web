import '@babel/polyfill'
import 'mutationobserver-shim'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import './plugins/axios'
import './plugins/bootstrap-vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import routes from './routes';

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter(routes);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

