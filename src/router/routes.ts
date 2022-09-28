import HeaderLayout from "../layouts/HeaderLayout.vue"
// import SingleCardLayout from "../layouts/SingleCardLayout.vue"

const Home = () => import("../views/Home.vue");
const About = () => import("../views/About.vue");
const Contact = () => import("../views/Contact.vue");

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
