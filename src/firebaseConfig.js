import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_9XTYDhSGe_UET5jCmX0MmmeeIAoXc9A",
  authDomain: "viajes-ecommerce.firebaseapp.com",
  projectId: "viajes-ecommerce",
  storageBucket: "viajes-ecommerce.appspot.com", 
  messagingSenderId: "883049354842",
  appId: "1:883049354842:web:da7b4a3ad150cd9213aa63"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
