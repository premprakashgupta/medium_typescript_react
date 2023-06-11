// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVUPjvAM8NZBM2Zcy8rUFNtOigP8CVI74",
  authDomain: "attendance-336da.firebaseapp.com",
  projectId: "attendance-336da",
  storageBucket: "attendance-336da.appspot.com",
  messagingSenderId: "112594904814",
  appId: "1:112594904814:web:eceb2812c839d73fa7f5ff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
