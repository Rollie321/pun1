// src/lib/firebase.ts
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';

// IMPORTANT: Replace with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlo69Mwe9GplwNQZoWjo12WhBYs8LAxXQ",
  authDomain: "charot-af5c5.firebaseapp.com",
  projectId: "charot-af5c5",
  storageBucket: "charot-af5c5.firebasestorage.app",
  messagingSenderId: "791506204744",
  appId: "1:791506204744:web:f97747ff1d9d1dac46407d"
};

// Initialize Firebase
let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const db: Firestore = getFirestore(app);

export { app, db };
