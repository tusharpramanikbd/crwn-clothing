import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1r1h_GDBUA8_hHK1YnROIkeEh7yriUIU",
  authDomain: "crwn-clothing-db-cbe0e.firebaseapp.com",
  projectId: "crwn-clothing-db-cbe0e",
  storageBucket: "crwn-clothing-db-cbe0e.appspot.com",
  messagingSenderId: "134398131241",
  appId: "1:134398131241:web:a369b662bb269127f1f038",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
