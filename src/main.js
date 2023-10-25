import './assets/main.css'
import './index.css'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {Tabs, Tab} from 'vue3-tabs-component';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon)
app.component('tabs', Tabs)
app.component('tab', Tab)

app.mount('#app')
