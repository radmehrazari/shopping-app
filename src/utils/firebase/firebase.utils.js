import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD3nd1uzuakEire9HU2N3OLvu-BYciZeDE",
  authDomain: "crwn-clothing-db-ab516.firebaseapp.com",
  projectId: "crwn-clothing-db-ab516",
  storageBucket: "crwn-clothing-db-ab516.appspot.com",
  messagingSenderId: "403992344067",
  appId: "1:403992344067:web:71d726c798c2e917d84036",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
