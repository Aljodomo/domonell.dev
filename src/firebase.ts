import {initializeApp} from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import json from "../firebase-config.json";

const firebase = initializeApp(json);

const appCheck = initializeAppCheck(firebase, {
    provider: new ReCaptchaV3Provider('6Ld_yZIgAAAAAH_43MMGqshSVs0aYOT_5Hn5TXbZ'),
    isTokenAutoRefreshEnabled: true
});

export {firebase};
