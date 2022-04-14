// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyA7Z0lO7y01aOszvtHztxT5gktXtcRZkKY",

    authDomain: "photography-portfolio-b04db.firebaseapp.com",

    projectId: "photography-portfolio-b04db",

    storageBucket: "photography-portfolio-b04db.appspot.com",

    messagingSenderId: "903846907331",

    appId: "1:903846907331:web:5fd888ef030ebbf83cc176",

    measurementId: "G-D7BTMMLVHK"

};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;

