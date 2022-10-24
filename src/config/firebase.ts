// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_UJ0eSO4XyDa9qnUpXfsfxTZQ-voVy50",
  authDomain: "social-media-e297e.firebaseapp.com",
  projectId: "social-media-e297e",
  storageBucket: "social-media-e297e.appspot.com",
  messagingSenderId: "35003364321",
  appId: "1:35003364321:web:6ac20f48895db74a64d8a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);