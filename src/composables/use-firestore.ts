import {getFirebase} from "../firebase";
import {addDoc, collection, getFirestore} from "firebase/firestore";

interface Message {
    name: string,
    email: string,
    subject: string,
    message: string,
}

export function useFirestore() {
    const firestore = getFirestore(getFirebase());

    function addMessage(message: Message) {
        return addDoc(collection(firestore, "messenges"), message);
    }

    return { addMessage }
}
