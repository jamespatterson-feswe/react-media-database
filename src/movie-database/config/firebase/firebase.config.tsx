import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";

/** @todo ADD A .env FILE TO REMOVE THE CONFIG OUT OF THIS FILE */

// Firebase configuration from setup of firestore
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyDz35_dmbfuQry4s3tN45fjAWKVxgUwQ2I",
  authDomain: "react-movie-database-a1844.firebaseapp.com",
  projectId: "react-movie-database-a1844",
  storageBucket: "react-movie-database-a1844.appspot.com",
  messagingSenderId: "954840261369",
  appId: "1:954840261369:web:ed384c57e489fb6e217828"
};

// Initialize Firebase app with config from firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

// Export the firestore
export const firestore: Firestore = getFirestore(app);