import {NavigationGuardWithThis} from "vue-router";
import {useAuth} from "../composables/use-auth";

export const routerNavigationGuard: NavigationGuardWithThis<undefined> =
    (to, from) => {
        const auth = useAuth();
        if(to.path.includes("/login") && auth.currentUser){
            return "/";
        }
        if (auth.currentUser == null && !to.path.includes("/login")) {
            return "/login";
        }
    }
