// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfZ48cYrqeG7gSLXuhRXEFSkWFYg-O4DY",
  authDomain: "phishing-website-a0bb2.firebaseapp.com",
  projectId: "phishing-website-a0bb2",
  storageBucket: "phishing-website-a0bb2.appspot.com",
  messagingSenderId: "1095887775265",
  appId: "1:1095887775265:web:479dc6fd71c5a89029a560",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
