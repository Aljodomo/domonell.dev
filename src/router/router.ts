import {createRouter, createWebHashHistory} from "vue-router"
import {routes} from "./routes";
import {routerNavigationGuard} from "./router-navigation-guard";

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
});

router.beforeEach(routerNavigationGuard);

export {router}
