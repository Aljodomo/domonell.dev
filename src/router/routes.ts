import Home from "../views/Home.vue"
import Login from "../views/Login.vue"
import HeaderLayout from "../layouts/HeaderLayout.vue"
import SingleCardLayout from "../layouts/SingleCardLayout.vue"

const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            layout: HeaderLayout
        }
    },
    {
        path: '/login',
        component: Login,
        meta: {
            layout: SingleCardLayout
        }
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
]

export {routes}
