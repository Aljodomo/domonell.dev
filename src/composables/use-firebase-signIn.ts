import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

export function useFirebaseSignIn(username: string, password: string) {
    const auth = getAuth();
    const email = username + "@domonell.dev";
    return signInWithEmailAndPassword(auth, email, password);
}
