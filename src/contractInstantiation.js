import {
  erc20ABI,
  ProxyAddress,
  LPAddress,
  WBNBAddress,
  router,
  poolABI,
  routerAddress
} from '@/util/casinoContract.js'
import {
  newBlockchainConnection
} from '@/util/getWeb.js'
import web3 from 'web3'
import store from "./store";

let WEB = ''
init()

function init () {
  // 避免获取不到window.ethereum
  window.onload = async () => {
    WEB = newBlockchainConnection(web3.givenProvider || window.ethereum)
    await store.dispatch('ActionsSetWEB3', WEB)
    await content()
  }
}
async function content () {
  await WEB.eth.requestAccounts().then(async (res, err) => {
    if (!err) {
      store.dispatch('ActionsGetAddress', res[0])
      //实例化合约
      let contractInstance = new WEB.eth.Contract(
        erc20ABI,
        LPAddress
      )
      store.dispatch('ActionsSetContractInstance', contractInstance)
      // 实例化池子合约
      let poolcontractInstance = new WEB.eth.Contract(
        poolABI,
        ProxyAddress
      )
      store.dispatch(
        'ActionsSetpoolContractInstance',
        poolcontractInstance
      )
      // 实例化lp合约
      let lpcontractInstance = new WEB.eth.Contract(
        erc20ABI,
        LPAddress
      )
      store.dispatch('ActionsLPcontractInstance', lpcontractInstance)
      // 实例化WBNB合约
      let bnbcontractInstance = new WEB.eth.Contract(
        erc20ABI,
        WBNBAddress
      )
      store.dispatch(
        'ActionsWBNBcontractInstance',
        bnbcontractInstance
      )
      // 实例化router合约
      let routercontractInstance = new WEB.eth.Contract(
        router,
        routerAddress
      )
      store.dispatch(
        'ActionsSetroutercontractInstance',
        routercontractInstance
      )

      await getBalanceOf(contractInstance, res[0])
      await myallLp(poolcontractInstance, res[0])
    }
  })
}
// LP余额
async function getBalanceOf (contractInstance, val) {
  let balance = await contractInstance.methods.balanceOf(val).call()
  balance = (balance / Math.pow(10, 18)).toFixed(4)
  store.dispatch('ActionsSetMyLp', balance)
}
// 我质押的总lp
async function myallLp (poolcontractInstance, val) {
  let myTotal = await poolcontractInstance.methods
    .getAccountInfoSum(val)
    .call()
  store.dispatch('ActionsSetGetAccountInfoSum', myTotal)
}