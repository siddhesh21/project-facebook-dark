// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBfQWwXfqSVss1Ld6mBdjVE1S9gk7v-I78",
  authDomain: "fb-dark-a30e8.firebaseapp.com",
  projectId: "fb-dark-a30e8",
  storageBucket: "fb-dark-a30e8.appspot.com",
  messagingSenderId: "619782638577",
  appId: "1:619782638577:web:de0d05802d748e65fc5250",
  measurementId: "G-70SPVXH1X8",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
