// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfpYQQFNyZN-0Igy4cFqW-wef8MtCUQrA",
  authDomain: "react-basics2.firebaseapp.com",
  projectId: "react-basics2",
  storageBucket: "react-basics2.appspot.com",
  messagingSenderId: "310854337105",
  appId: "1:310854337105:web:5df42487293622384aae70",
  measurementId: "G-H9WY8GM7SM"
};

initializeApp(firebaseConfig)
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore();