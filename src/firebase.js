
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhhKyQ3rOlDojQlgreXaiQ0W-TnblBMWo",
  authDomain: "fuller-chiro-d66b1.firebaseapp.com",
  projectId: "fuller-chiro-d66b1",
  storageBucket: "fuller-chiro-d66b1.appspot.com",
  messagingSenderId: "899728461916",
  appId: "1:899728461916:web:8e6d4dcc0cf40c01ff5699",
  measurementId: "G-4FWTGHZP49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

// Initialize Firestore
const db = getFirestore(app);

export { db, storage };
