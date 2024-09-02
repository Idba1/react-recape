// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjCShmrf9c0KDH2SNN5UOGjDojKxRuXGw",
    authDomain: "react-glasses-81b77.firebaseapp.com",
    projectId: "react-glasses-81b77",
    storageBucket: "react-glasses-81b77.appspot.com",
    messagingSenderId: "778216753965",
    appId: "1:778216753965:web:fb5c2684a8900d62d8a1a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
