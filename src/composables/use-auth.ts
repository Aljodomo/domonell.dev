import {getAuth} from "firebase/auth";
import {firebase} from "../firebase";

export function useAuth(){
    return getAuth(firebase);
}
