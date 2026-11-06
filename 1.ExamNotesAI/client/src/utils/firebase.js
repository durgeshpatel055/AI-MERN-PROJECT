
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotes-8ee88.firebaseapp.com",
  projectId: "authexamnotes-8ee88",
  storageBucket: "authexamnotes-8ee88.firebasestorage.app",
  messagingSenderId: "529266766488",
  appId: "1:529266766488:web:0af674e731f3264c7916ed"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth, provider}