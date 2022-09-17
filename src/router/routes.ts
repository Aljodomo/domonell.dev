import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Contact from "../views/Contact.vue"
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
        path: '/about',
        component: About,
        meta: {
            layout: HeaderLayout
        }
    },
    {
        path: '/contact',
        component: Contact,
        meta: {
            layout: HeaderLayout
        }
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
]

export {routes}
