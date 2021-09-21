import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCVsNkH0h5OAYv2NaO3gnO6mZeY1B-zfaU",
  authDomain: "clone-104c2.firebaseapp.com",
  projectId: "clone-104c2",
  storageBucket: "clone-104c2.appspot.com",
  messagingSenderId: "840268680497",
  appId: "1:840268680497:web:3fee921e29fa803e973410",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
