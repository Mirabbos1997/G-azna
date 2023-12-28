import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import routerFactory from './router'
import i18nFactory from '@/i18n'
import './assets/main.scss';

const app = createApp(App)
const pinia = createPinia()
app.use(pinia);
const i18n = i18nFactory()
app.use(i18n)
app.use(routerFactory(i18n.global));
app.mount('#app');