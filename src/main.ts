import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/data/cartStore'
import './assets/tailwind.css'

createApp(App).use(router).use(store).mount('#app')
