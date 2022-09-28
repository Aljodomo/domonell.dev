import {createApp} from 'vue'
import App from './App.vue'
import './index.scss'

import {router} from "./router/router";
import RouterPrefetch from 'vue-router-prefetch'

createApp(App)
    .use(router)
    .use(RouterPrefetch)
    .mount('#app');
