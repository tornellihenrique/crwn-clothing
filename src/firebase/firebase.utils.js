import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBjDYrEE6uvfeehJy9Hd4pTIqw5MxgqQvI',
  authDomain: 'crwn-db-746db.firebaseapp.com',
  databaseURL: 'https://crwn-db-746db.firebaseio.com',
  projectId: 'crwn-db-746db',
  storageBucket: 'crwn-db-746db.appspot.com',
  messagingSenderId: '688994360138',
  appId: '1:688994360138:web:7a653bee13a9719da9ffb3',
  measurementId: 'G-NQLC94EQKS'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
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

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Signin with Google
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
