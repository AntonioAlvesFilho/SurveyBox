import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './plugins/vee-validate'
import { Form, Field, ErrorMessage } from 'vee-validate'

const app = createApp(App)

app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)

app.use(store).use(router).mount('#app')
