// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHStWwSc8qxUzdlRoz-FHXKD9dKo2X-jQ",
  authDomain: "db-lab-7ec57.firebaseapp.com",
  projectId: "db-lab-7ec57",
  storageBucket: "db-lab-7ec57.appspot.com",
  messagingSenderId: "934277334941",
  appId: "1:934277334941:web:c066c0f692b3728387d174",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
