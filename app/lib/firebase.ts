import { initializeApp } from "firebase/app"

import { getAuth } from "firebase/auth"

import { getFirestore } from "firebase/firestore"

const firebaseConfig = {

  apiKey: "AIzaSyD4zVO-4z0iu19Yft3iAl5pS4RuneXHTOA",

  authDomain: "projexahub-abc0e.firebaseapp.com",

  projectId: "projexahub-abc0e",

  storageBucket: "projexahub-abc0e.firebasestorage.app",

  messagingSenderId: "34396510514",

  appId: "1:34396510514:web:747733b535a1ee54389f2b",

  measurementId: "G-LR1S7343DJ",
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const db = getFirestore(app)