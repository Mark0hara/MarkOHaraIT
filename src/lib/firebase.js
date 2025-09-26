// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAouYUc9tkqaw9UwiZO0wc__nD8ImfS9o",
  authDomain: "portafolio-marco-71f0b.firebaseapp.com",
  projectId: "portafolio-marco-71f0b",
  storageBucket: "portafolio-marco-71f0b.firebasestorage.app",
  messagingSenderId: "504964720237",
  appId: "1:504964720237:web:34566b1f51da495e6e8164",
  measurementId: "G-L0NPPVN86M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);