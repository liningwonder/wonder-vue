import en from './en-US.js'
import cn from './zh-CN.js'

import { createI18n } from 'vue-i18n'

const messages = {
  en,
  cn
}

const i18n = createI18n({
  legacy: false,
  messages,
  locale: 'cn'
})

export default i18n
