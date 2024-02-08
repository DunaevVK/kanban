import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import VFocus from "./components/directives/VFocus"

const app = createApp(App)
app.directive('focus', VFocus)
app.use(createPinia())

app.mount('#app')