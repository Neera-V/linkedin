import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKLyXPgppgkX3E4RTYb1MKqJ4UEj2Ne4A",

  authDomain: "linkedin-clone-3a53e.firebaseapp.com",

  projectId: "linkedin-clone-3a53e",

  storageBucket: "linkedin-clone-3a53e.appspot.com",

  messagingSenderId: "704081708729",

  appId: "1:704081708729:web:ff457532bef536a1577d68",

  measurementId: "G-77KQZ4GV2Z",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
