import {initializeApp} from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import json from "../firebase-config.json";
import {useAuth} from "./composables/use-auth";

const firebase = initializeApp(json);

const appCheck = initializeAppCheck(firebase, {
    provider: new ReCaptchaV3Provider('6Lc685IgAAAAALye5yHJxEX-uvpbYlY9OLUl39DD'),
    isTokenAutoRefreshEnabled: true
});

function authInitialized(): Promise<void> {
    return new Promise((resolve) => {
            let isInitialized = false;
            useAuth().onAuthStateChanged(() => {
                if (!isInitialized) {
                    isInitialized = true;
                    resolve();
                }
            });
        }
    )
}

export {firebase, authInitialized};
