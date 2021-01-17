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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const query = `users/${userAuth.uid}`;
  const userRef = firestore.doc(query);
  const snapshot = await userRef.get();

  // create new user if it doesn't exist
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// always trigger Google popup whenever GoogleAuthProvider is used
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
