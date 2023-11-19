// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js"
import {onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js"

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxTnMYqgDT3lQmPqBOHMtrr7Aav_BYDHY",
  authDomain: "blogdinamita-ec4b5.firebaseapp.com",
  projectId: "blogdinamita-ec4b5",
  storageBucket: "blogdinamita-ec4b5.appspot.com",
  messagingSenderId: "548689881854",
  appId: "1:548689881854:web:3ea690e44843c50d8893af"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
