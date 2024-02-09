// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCEiR7KD5FIo9b1hg2PWRmPiHglveN9WY",
  authDomain: "twitter-clone-fes-e0736.firebaseapp.com",
  projectId: "twitter-clone-fes-e0736",
  storageBucket: "twitter-clone-fes-e0736.appspot.com",
  messagingSenderId: "851639849610",
  appId: "1:851639849610:web:88dc74f256c0d0fcb99373"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)
export const auth = getAuth(app)