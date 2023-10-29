// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpyga3VndJvNPxhs3b16DubXNsNov4u84",
  authDomain: "react-crud-firebase-ffc5e.firebaseapp.com",
  projectId: "react-crud-firebase-ffc5e",
  storageBucket: "react-crud-firebase-ffc5e.appspot.com",
  messagingSenderId: "992242963709",
  appId: "1:992242963709:web:eeefa61756987050109a94",
  measurementId: "G-WVWTPSN1QR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);