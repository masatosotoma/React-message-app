import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCsu0_igUj9VwcPBE4f5tvQzq8qsJQOicw",
  authDomain: "line-clone-43fca.firebaseapp.com",
  projectId: "line-clone-43fca",
  storageBucket: "line-clone-43fca.appspot.com",
  messagingSenderId: "83016784063",
  appId: "1:83016784063:web:90f15d26748744daf10e0a",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
