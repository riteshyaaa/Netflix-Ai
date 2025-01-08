// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9ev-m8kGRU6bzGXBNuIpZdEH1V_Uk-6Q",
  authDomain: "netflix-ai-360af.firebaseapp.com",
  projectId: "netflix-ai-360af",
  storageBucket: "netflix-ai-360af.firebasestorage.app",
  messagingSenderId: "43196819536",
  appId: "1:43196819536:web:27f444d7ccaec624ecc955",
  measurementId: "G-QFW9G8EZ43"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export {app, auth} 


 