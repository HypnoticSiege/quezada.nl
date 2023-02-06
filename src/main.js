import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'

createApp(App)
    .use(router)
    .mount('#app')
    .use(VueAnalytics, {
        id: 'G-139GHCSZ2W',
    })