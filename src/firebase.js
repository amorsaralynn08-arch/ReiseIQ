
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDESJOrnfIUY2Si_F1-Mxxh3gOniFvSr6A",
  authDomain: "react-project-2090b.firebaseapp.com",
  projectId: "react-project-2090b",
  storageBucket: "react-project-2090b.firebasestorage.app",
  messagingSenderId: "634213670384",
  appId: "1:634213670384:web:1e5473fa582da820179135",
  measurementId: "G-QRH82VQLL2"

  
};
console.log("PROJECT:", firebaseConfig.projectId);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);