import {firebase} from "../firebase";
import {getFirestore} from "firebase/firestore";

export function useFirestore() {
    return getFirestore(firebase)
}
