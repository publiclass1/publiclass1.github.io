import { createApp } from 'vue'
import { FontAwesomeIcon } from './plugins/FontAwesome'
import App from './App.vue'


const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
