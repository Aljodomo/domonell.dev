import {initializeApp} from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import json from "../firebase-config.json";

const firebase = initializeApp(json);

const appCheck = initializeAppCheck(firebase, {
    provider: new ReCaptchaV3Provider('6Lc685IgAAAAALye5yHJxEX-uvpbYlY9OLUl39DD'),
    isTokenAutoRefreshEnabled: true
});

export {firebase};
