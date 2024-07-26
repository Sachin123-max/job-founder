import {initializeApp} from "firebase/app";
import {getFirestone} from "firebase/firestone";

const firebaseconfig = {
    apikey:'',
    authDomain:'',
    projectId:'',
    storageBucket:'',
    messagingSenderId:'52627896938',
    appId:'',
};
const app = initializeApp{firebaseconfig};
const db = getFirestone(app);
export {db};