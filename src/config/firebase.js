// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCk78y3IUARWAWdb8gfqzad_d1XQ7xO5HQ",
  authDomain: "akp-portfolio.firebaseapp.com",
  projectId: "akp-portfolio",
  storageBucket: "akp-portfolio.appspot.com",
  messagingSenderId: "552940287679",
  appId: "1:552940287679:web:3aab138a392eec7358b80a",
  measurementId: "G-KNRD34H3XR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
const analytics = getAnalytics(app);
