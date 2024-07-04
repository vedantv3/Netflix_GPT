// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwvVToL1Itz6DZpIYKkyemqQfTJ0gm1Yw",
  authDomain: "netflixgpt-4a318.firebaseapp.com",
  projectId: "netflixgpt-4a318",
  storageBucket: "netflixgpt-4a318.appspot.com",
  messagingSenderId: "679564775587",
  appId: "1:679564775587:web:645fca77429f86d36def16",
  measurementId: "G-FHMY7MEXN3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(); 