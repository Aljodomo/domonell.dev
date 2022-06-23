import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {firebase} from "../firebase";

export function useFirebaseSignIn(username: string, password: string) {
    const auth = getAuth(firebase);
    const email = username + "@domonell.dev";
    return signInWithEmailAndPassword(auth, email, password);
}
