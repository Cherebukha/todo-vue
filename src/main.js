import { createApp } from 'vue'
import App from './App.vue'
import Store from './store/index.js'

createApp(App).use(Store).mount('#app')