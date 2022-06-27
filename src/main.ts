import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import "./firebase.ts";
import {router} from "./router/router";
import I18NextVue from "i18next-vue";
import {i18next} from "./i18n";

createApp(App)
    .use(router)
    .use(I18NextVue, { i18next })
    .mount('#app');
