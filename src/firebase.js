// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwns3ae2qywVa2chqnscnu0mHS6zLriSw",
  authDomain: "leg-builder-ede65.firebaseapp.com",
  projectId: "leg-builder-ede65",
  storageBucket: "leg-builder-ede65.appspot.com",
  messagingSenderId: "10914408501",
  appId: "1:10914408501:web:73225555ba407887bfa97c",
  measurementId: "G-DNF087RS23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);

export { db };