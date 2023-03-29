import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import './index.scss'

import { routes } from "./router/routes";

// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
export const createApp = ViteSSG(
    // the root component
    App,
    // vue-router options
    { routes },
    // function to have custom setups
    async ({ app, router, routes, isClient, initialState }) => {
    },
)