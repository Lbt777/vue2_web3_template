export function NumFormat(value, type) {
	if (!value) return '0.00';
	var intPart = parseInt(value); //获取整数部分（这里是windy93的方法）
	var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'); //将整数部分逢三一断
	var floatPart = ".00"; //预定义小数部分
	var value2Array = value.toString().split(".");
	// 传参表示取整
	if(type) return intPartFormat
	//=2表示数据有小数位
	if (value2Array.length == 2) {
		floatPart = (value2Array[1].substr(0, 4)).toString(); //拿到小数部分

		if (floatPart.length == 1) { //补0,实际上用不着
			return intPartFormat + "." + floatPart + '0';
		} else {
			return intPartFormat + "." + floatPart;
		}
	} else {
		return intPartFormat
	}
}
//时间戳转换年月日方法
//format为“yyyy-mm-dd”、“yyyy/mm/dd”
//str传时间戳
//例： getUnixToDate('yyyy-mm-dd',"1618934400000")
//返回："2021-04-21"
export function getUnixToDate(format, str) {
	var oDate = new Date(parseInt(str*1000)),
		oYear = oDate.getFullYear(),
		oMonth = oDate.getMonth() + 1,
		oDay = oDate.getDate(),
		oHour = oDate.getHours(),
		oMin = oDate.getMinutes(),
		oSec = oDate.getSeconds(),
		oTime = '';
	if (format == 'yyyy-mm-dd') {
		oTime = oYear + '.' + getzf(oMonth) + '.' + getzf(oDay) + ' ' + getzf(oHour) + ':' + getzf(oMin) + ':' + getzf(oSec); //最后拼接时间
	} else if (format == 'yyyy/mm/dd') {
		oTime = oYear + '/' + getzf(oMonth) + '/' + getzf(oDay) + ' ' + getzf(oHour) + ':' + getzf(oMin) + ':' + getzf(
			oSec); //最后拼接时间
	}
	return oTime
}
//补0操作  
function getzf(num) {
	if (parseInt(num) < 10) {
		num = '0' + num;
	}
	return num;
}
