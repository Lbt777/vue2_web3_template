const mutations = {
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
}
export default mutations