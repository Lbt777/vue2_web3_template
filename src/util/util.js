/**
 * 方法说明
 * @method 地址格式化
 * @param {str, frontLen, endLen, cha, chaNum} 字符串 起始 结束 标识 标识长度
 * @return {返回值类型} String
 */
export function plusXing(str, frontLen, endLen, cha, chaNum) {
	var len = chaNum || str.length - frontLen - endLen;
	var xing = '';
	for (var i = 0; i < len; i++) {
		xing += cha;
	}
	return str.substring(0, frontLen) + xing + str.substring(str.length - endLen);
}
