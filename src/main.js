import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";
import { i18n, vantLocales } from "./lang";
import * as util from './util/util.js'
import VueBus from 'vue-bus'
import './contractInstantiation'
Vue.use(VueBus)

Vue.prototype.$util = util
Vue.prototype.$store = store
Vue.use(Vant);
vantLocales(i18n.locale);

// let NODE_ENV = process.env.NODE_ENV == 'development' ? true : false
// import VConsole from 'vconsole';
// if(NODE_ENV) {
//   new VConsole();
// }

new Vue({
  render: (h) => h(App),
  router,
  i18n,
  store,
}).$mount("#app");
