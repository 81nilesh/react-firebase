// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3mTMXkvIDvaNNMpB6argj0YKHcIXYC3Q",
    authDomain: "expense-c54fc.firebaseapp.com",
    projectId: "expense-c54fc",
    storageBucket: "expense-c54fc.appspot.com",
    messagingSenderId: "74727234518",
    appId: "1:74727234518:web:9ca8a89210ce242423e277"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)