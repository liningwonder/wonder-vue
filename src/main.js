import '@/assets/style/global.less'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './locale'

const app = createApp(App)

const pinia = createPinia()
//或者const pinia = createPinia() app.use(pinia) app.use(createPinia())
app.use(router)
app.use(pinia)
app.use(i18n)

app.mount('#app')
