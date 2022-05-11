const actions = {
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
export default actions