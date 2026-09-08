// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw5aKRzLKDS9ETD466KGPeuZ7_qOW7oUU",
  authDomain: "maasc-admission.firebaseapp.com",
  projectId: "maasc-admission",
  storageBucket: "maasc-admission.firebasestorage.app",
  messagingSenderId: "391924119351",
  appId: "1:391924119351:web:0e55cbe892ef8f589dccb2",
  measurementId: "G-BRZDFVE6WH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
