// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-bd770.firebaseapp.com",
  projectId: "mern-auth-bd770",
  storageBucket: "mern-auth-bd770.appspot.com",
  messagingSenderId: "402757214268",
  appId: "1:402757214268:web:d179c193ddfd72bc65a339"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);