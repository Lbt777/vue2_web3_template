let NODE_ENV = process.env.NODE_ENV == 'development' ? true : false
let inputLpToUsdtNumber,
	ProxyAddress,
	LPAddress,
	WBNBAddress,
	routerAddress,
	srsAddress,
	usdtAddress,
	poolABI,
	erc20ABI,
	router;


import erc20 from './erc20'
import pool from './pool'
import routerABI from './routerABI'
poolABI = pool
erc20ABI = erc20
router = routerABI


if (NODE_ENV) {
	// 测试
	inputLpToUsdtNumber = 1
	ProxyAddress = '0x4E681beF381b1b7dFdcFC7a1c0610F9BE5dc7f72' // 矿池
	LPAddress = '0x279cCcBdcD5Ae24b40F979De4Fa42654A17C5595' // lp地址
	WBNBAddress = '0xae13d989dac2f0debff460ac112a837c89baa7cd' // wbnb地址
	routerAddress = '0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3'
	srsAddress = '0x5FbeF7a4AF91339F67486DADbAbc2f208A44f395'
	usdtAddress = '0x7ef95a0fee0dd31b22626fa2e10ee6a223f8a684'
} else {
	// 正式
	console.log = function() {}
	inputLpToUsdtNumber = 100
	ProxyAddress = '0xa8a0018487230CB3aE857fe6Ccef12188C457284' // 矿池
	LPAddress = '0x6D72C79597Ab8ab51b954E97074FC56d9e859ACE' // lp地址
	WBNBAddress = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' // wbnb地址
	routerAddress = '0x10ED43C718714eb63d5aA57B78B54704E256024E'
	srsAddress = '0x37f96EbF0C24ddaEc0470f5260B3d7B1f4e4f812'
	usdtAddress = '0x55d398326f99059fF775485246999027B3197955'
}

export {
	poolABI, // 矿池
	ProxyAddress, // 矿池
	erc20ABI,
	LPAddress,
	WBNBAddress,
	router,
	routerAddress,
	srsAddress,
	usdtAddress,
	inputLpToUsdtNumber // 输入框lp转换usdt的数量
}
