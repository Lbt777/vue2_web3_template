import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
Vue.use(Vuex)

// 未安装
// import persistedState from "vuex-persistedstate";
//调式，开发模式开启严格模式，要使用mutations提交
// const debug = process.env.NODE_ENV !='production'

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  // strict:debug,
  // plugins:[persistedState()],//vuex持续化存储，默认存储到localstorage
})
export default store;
