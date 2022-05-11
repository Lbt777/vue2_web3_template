import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations: {
    getAddress (state, payload) {
      state.address = payload
    },
    setWEB3 (state, payload) {
      state.WEB3 = payload
    },
    setContractInstance (state, payload) {
      state.contractInstance = payload
    },
    setpoolContractInstance (state, payload) {
      state.poolContractInstance = payload
    },
    setMyLp (state, payload) {
      state.myLp = payload
    },
    setGetAccountInfoSum (state, payload) {
      state.getAccountInfoSum = payload
    },
    setLPcontractInstance (state, payload) {
      state.LPcontractInstance = payload
    },
    setWBNBcontractInstance (state, payload) {
      state.WBNBcontractInstance = payload
    },
    setroutercontractInstance (state, payload) {
      state.routercontractInstance = payload
    }
  },
  actions: {
    ActionsGetAddress (context, playload) {
      context.commit("getAddress", playload);
    },
    ActionsSetWEB3 (context, playload) {
      context.commit("setWEB3", playload);
    },
    ActionsSetContractInstance (context, playload) {
      context.commit("setContractInstance", playload);
    },
    ActionsSetpoolContractInstance (context, playload) {
      context.commit("setpoolContractInstance", playload);
    },
    ActionsSetMyLp (context, playload) {
      context.commit("setMyLp", playload);
    },
    ActionsSetGetAccountInfoSum (context, playload) {
      context.commit("setGetAccountInfoSum", playload);
    },
    ActionsLPcontractInstance (context, playload) {
      context.commit("setLPcontractInstance", playload);
    },
    ActionsWBNBcontractInstance (context, playload) {
      context.commit("setWBNBcontractInstance", playload);
    },
    ActionsSetroutercontractInstance (context, playload) {
      context.commit("setroutercontractInstance", playload);
    }
  }
})
export default store;
