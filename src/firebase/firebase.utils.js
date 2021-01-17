import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBfcWSx9ag3C49Bhi7GmTRea0nOTeSp1a4",
  authDomain: "crown-db-88641.firebaseapp.com",
  projectId: "crown-db-88641",
  storageBucket: "crown-db-88641.appspot.com",
  messagingSenderId: "857476571115",
  appId: "1:857476571115:web:8c4ee070fa3df6553f03ae"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// always trigger Google popup whenever GoogleAuthProvider is used
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
