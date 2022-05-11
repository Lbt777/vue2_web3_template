import Vue from 'vue'
import VueI18n from 'vue-i18n'
import {
	Locale
} from 'vant'
import enUS from 'vant/lib/locale/lang/en-US'
import zhCN from 'vant/lib/locale/lang/zh-CN'
import zhHK from 'vant/lib/locale/lang/zh-HK'
import viVN from 'vant/lib/locale/lang/vi-VN'

import enLocale from './en_us'
import zhLocale from './zh_cn'
import hkLocale from './zh_hk'
import vnLocale from './vi-vn'

Vue.use(VueI18n)

const messages = {
	en: {
		...enUS,
		...enLocale
	},
	zh: {
		...zhCN,
		...zhLocale
	},
	hk: {
		...zhHK,
		...hkLocale
	},
	vi: {
		...viVN,
		...vnLocale
	}
}

let nowSettingLanguage = ''
if(localStorage.getItem('language')) {
	nowSettingLanguage = localStorage.getItem('language')
} else {
	const language = navigator.language
	switch (language.toLowerCase()) {
		case 'zh-cn':
			nowSettingLanguage = 'en'
			break
		case 'en-us':
			nowSettingLanguage = 'en'
			break
		case 'zh-tw':
			nowSettingLanguage = 'hk'
			break
		case 'zh-hk':
			nowSettingLanguage = 'hk'
			break
		case 'vi-vn':
			nowSettingLanguage = 'vi'
			break
		default:
			nowSettingLanguage = 'en'
			break
	}
}

const i18n = new VueI18n({
	locale: nowSettingLanguage, // 设置默认语言
	messages: messages // 设置资源文件对象
})

// 更新vant组件库本身的语言变化，支持国际化
function vantLocales(lang) {
	if (lang === 'en') {
		Locale.use(lang, enUS)
	} else if (lang === 'zh') {
		Locale.use(lang, zhCN)
	} else if (lang === 'hk') {
		Locale.use(lang, zhHK)
	} else if (lang === 'zh') {
		Locale.use(lang, viVN)
	}
}

export {
	i18n,
	vantLocales
}
