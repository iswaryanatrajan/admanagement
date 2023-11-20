import './assets/main.css'
import './index.css'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {Tabs, Tab} from 'vue3-tabs-component';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import { Quasar } from 'quasar'
import  vueSelect  from 'vue-select';
//import 'quasar/src/css/index.sass'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import store from "./store";

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'
import 'vue-select/dist/vue-select.css';

const app = createApp(App)



app.use(createPinia())
app.use(router)
app.use(store)
app.component("font-awesome-icon", FontAwesomeIcon)
app.component('tabs', Tabs)
app.component('tab', Tab)
app.component('v-select', vueSelect)
app.use(Antd)
app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
  })

app.mount('#app')
