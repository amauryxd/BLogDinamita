import firebase from "firebase/app";
import "firebase/firestore";

export function configuracion(){

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyCxTnMYqgDT3lQmPqBOHMtrr7Aav_BYDHY",
  authDomain: "blogdinamita-ec4b5.firebaseapp.com",
  projectId: "blogdinamita-ec4b5",
  storageBucket: "blogdinamita-ec4b5.appspot.com",
  messagingSenderId: "548689881854",
  appId: "1:548689881854:web:3ea690e44843c50d8893af"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

}