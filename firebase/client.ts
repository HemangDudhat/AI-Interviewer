// Importing the functions needed from the SDKs
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Added SDKs for Firebase products that are wanting to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQBmGt6Q7QA1UrvtimJ0xA6oIWv8lj0w8",
  authDomain: "prepwise-20253.firebaseapp.com",
  projectId: "prepwise-20253",
  storageBucket: "prepwise-20253.firebasestorage.app",
  messagingSenderId: "645259826878",
  appId: "1:645259826878:web:2dd5a58ce084bdca4a30ef",
  measurementId: "G-VFKTV7SWLC"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
