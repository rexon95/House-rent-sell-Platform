import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBxcYu2m8trN0u25ZbFazWDT3q0tmxy0SQ",
  authDomain: "house-sell-platform.firebaseapp.com",
  projectId: "house-sell-platform",
  storageBucket: "house-sell-platform.appspot.com",
  messagingSenderId: "1001134110515",
  appId: "1:1001134110515:web:82562588f3fcf541897046"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()