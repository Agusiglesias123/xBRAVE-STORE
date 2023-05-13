// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJtsG6IrSAsGf9SnM1CnUaPyxssy5VgO0",
  authDomain: "xbrave-d1b84.firebaseapp.com",
  projectId: "xbrave-d1b84",
  storageBucket: "xbrave-d1b84.appspot.com",
  messagingSenderId: "340773418525",
  appId: "1:340773418525:web:21e3b3dc9a3291b9ae78f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => {return app};