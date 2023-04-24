// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHAcJZIgkPAvp9Ds2C6CdesdEHToitR6U",
  authDomain: "cardwave-114e8.firebaseapp.com",
  databaseURL: "https://cardwave-114e8-default-rtdb.firebaseio.com",
  projectId: "cardwave-114e8",
  storageBucket: "cardwave-114e8.appspot.com",
  messagingSenderId: "276418875379",
  appId: "1:276418875379:web:e03eb154526f37ae8a4c86",
  measurementId: "G-ZJTM60K16L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);