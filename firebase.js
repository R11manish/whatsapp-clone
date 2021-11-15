import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDEYb6nekMI21W5B4JzgvqM3kSH7MLYzzs',
  authDomain: 'whatsapp-clone-326b4.firebaseapp.com',
  projectId: 'whatsapp-clone-326b4',
  storageBucket: 'whatsapp-clone-326b4.appspot.com',
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
