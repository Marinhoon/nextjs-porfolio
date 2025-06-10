// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Adicione esta importação
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8Eayvfra3q2gbwDAAG8IuILBodZMdmII",
  authDomain: "dev-marinho.firebaseapp.com",
  projectId: "dev-marinho",
  storageBucket: "dev-marinho.firebasestorage.app",
  messagingSenderId: "385022017940",
  appId: "1:385022017940:web:470dc38d5fd39193d24f81",
  measurementId: "G-PLYXMP6BQZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Configure Firestore
export const db = getFirestore(app); 
