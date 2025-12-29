import './assets/main.css'
import 'carbon-components/css/carbon-components.css'
// import ChartsVue from '@carbon/charts-vue'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
// app.use(ChartsVue)
app.use(router)
app.mount('#app')
