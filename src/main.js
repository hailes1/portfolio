import './assets/main.css'
import 'carbon-components/css/carbon-components.css'
import ChartsVue from '@carbon/charts-vue'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(ChartsVue)
app.mount('#app')
