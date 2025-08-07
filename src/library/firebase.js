import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDx9r6e8GrpV7zvjZUc9WUV6eaCfRYhzrY",
  authDomain: "sare-netflix-clone.firebaseapp.com",
  projectId: "sare-netflix-clone",
  storageBucket: "sare-netflix-clone.firebasestorage.app",
  messagingSenderId: "310641088922",
  appId: "1:310641088922:web:67eafa634a00443207c223",
  measurementId: "G-BKYF7RRX23",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
