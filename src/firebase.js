import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCH06zZ0V36Hx4jX2Erj_K2SLhh1v6GvVg",
  authDomain: "chichat-9313e.firebaseapp.com",
  projectId: "chichat-9313e",
  storageBucket: "chichat-9313e.appspot.com",
  messagingSenderId: "558302527908",
  appId: "1:558302527908:web:dc9ce6579f6451c0970131"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);