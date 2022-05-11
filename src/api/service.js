import axios from 'axios'
import {
	Toast
} from 'vant'
// http://dapp-api.starshow.cc
// 192.168.3.28:8079
const ConfigBaseURL = process.env.NODE_ENV == 'development' ? 'http://192.168.3.28:8079/' : 'http://dapp-api.starshow.cc' //默认路径，这里也可以使用env来判断环境
let loadingInstance = null //这里是loading
//使用create方法创建axios实例
export const Service = axios.create({
	timeout: 10000, // 请求超时时间
	baseURL: ConfigBaseURL,
	method: 'post',
	headers: {
		'Content-Type': 'application/json'
	}
})
// 添加请求拦截器
Service.interceptors.request.use(config => {
	loadingInstance = Toast.loading({
		duration: 0,
		message: '加载中...',
		forbidClick: true
	});
	return config
})
// 添加响应拦截器
Service.interceptors.response.use(response => {
	loadingInstance.clear()
	let data = response.data
	if(data.status == 200) {
		return data.data
	} else {
		Toast.fail(data.message)
	}
	
}, error => {
	console.log('TCL: error', error)
	const msg = error.Message !== undefined ? error.Message : ''
	Toast.loading({
		forbidClick: true,
		message: '网络错误' + msg
	});
	return Promise.reject(error)
})
