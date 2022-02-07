import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDQl53-1WAUCYYj1gq7IqUG3JGIGaChu9s",
    authDomain: "linked-in-clone-10d9f.firebaseapp.com",
    projectId: "linked-in-clone-10d9f",
    storageBucket: "linked-in-clone-10d9f.appspot.com",
    messagingSenderId: "1092886627158",
    appId: "1:1092886627158:web:37660f639fb35318704cf7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };