// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBPDuNjzAKQB_7CM6o4sOOaxOLd79X0jqM",
    authDomain: "genius-car-service-714e8.firebaseapp.com",
    projectId: "genius-car-service-714e8",
    storageBucket: "genius-car-service-714e8.appspot.com",
    messagingSenderId: "629798907714",
    appId: "1:629798907714:web:95f2f7ddf034a7c391e2db",
    measurementId: "G-CFS6FBBGSW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export default auth
