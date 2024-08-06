// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmMOt9gSnONOniJLMi9Cj7jDYdTJj3_co",
  authDomain: "simplehrms-8ba17.firebaseapp.com",
  projectId: "simplehrms-8ba17",
  storageBucket: "simplehrms-8ba17.appspot.com",
  messagingSenderId: "115901079715",
  appId: "1:115901079715:web:32530235f5f238f00f1f16",
  measurementId: "G-1B6S5Q0G9S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export {auth}