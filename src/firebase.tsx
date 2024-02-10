import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCyc1cAzXJAmIf2HNQhryT5c3O1ydtJro4",
  authDomain: "port-acc65.firebaseapp.com",
  projectId: "port-acc65",
  storageBucket: "port-acc65.appspot.com",
  messagingSenderId: "293769290419",
  appId: "1:293769290419:web:1abb0d7da50debf47c46c6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const db = getFirestore(app);