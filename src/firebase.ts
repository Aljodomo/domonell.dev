// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";

import json from "../firebase-config.json";

console.log(json)
// Initialize Firebase
const firebase = initializeApp(json);

export {firebase};
