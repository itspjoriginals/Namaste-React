// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBeGa2gDo9QCt5Bzt7KOBKXo0alIUpwsWQ",
  authDomain: "netflixgpt-121eb.firebaseapp.com",
  projectId: "netflixgpt-121eb",
  storageBucket: "netflixgpt-121eb.firebasestorage.app",
  messagingSenderId: "68759496634",
  appId: "1:68759496634:web:a8457819124f52e54d5f83",
  measurementId: "G-4FVEP6VPYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();