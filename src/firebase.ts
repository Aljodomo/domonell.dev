import { FirebaseApp, initializeApp } from "firebase/app";
import { AppCheck, initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import json from "../firebase-config.json";

let firebase: FirebaseApp;

let appCheck: AppCheck;

export function getFirebase() {
    if(!firebase) {
        firebase = initializeApp(json);
        appCheck = initializeAppCheck(firebase, {
            provider: new ReCaptchaV3Provider('6Lc685IgAAAAALye5yHJxEX-uvpbYlY9OLUl39DD'),
            isTokenAutoRefreshEnabled: true,
        });
    }
    return firebase;
}