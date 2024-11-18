// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu9S6ge_tQJatnhw35pa46Hy3NvgK0w_I",
  authDomain: "nuengport.firebaseapp.com",
  projectId: "nuengport",
  storageBucket: "nuengport.appspot.com",
  messagingSenderId: "254152753367",
  appId: "1:254152753367:web:51943383669edba22f7092",
  measurementId: "G-SBY4F079QL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);