
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from"firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_oU0D5qeh3QD02hP2PNom1HWdxr4uKyY",
  authDomain: "panda-e-commerce-b653a.firebaseapp.com",
  projectId: "panda-e-commerce-b653a",
  storageBucket: "panda-e-commerce-b653a.appspot.com",
  messagingSenderId: "966250215423",
  appId: "1:966250215423:web:7fff2e7f293e5233d499ca",
  measurementId: "G-G6RTSV402N"
};
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const googleProvider=new GoogleAuthProvider();