import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { auth0 } from './auth0'
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(auth0)
app.mount('#app')
