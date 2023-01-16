// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseApp = initializeApp(
  {
    apiKey: "AIzaSyAGXhSUsLqlfLeI6cYYhSZdHToHBWE2Id8",
    authDomain: "timeline-a2835.firebaseapp.com",
    projectId: "timeline-a2835",
    storageBucket: "timeline-a2835.appspot.com",
    messagingSenderId: "681278425514",
    appId: "1:681278425514:web:97f19a4e43d3ad77f783d3",
    measurementId: "G-ND7NPM3LP9",
  },
  "other"
);

// Initialize Firebase
//const app2 = initializeApp(firebaseConfig);
//const auth = getAuth();
const db = getFirestore(firebaseApp);
export { db };
