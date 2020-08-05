import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBM6fQvkVXti7Notbtk6S598HE0_YIZEEI',
  authDomain: 'crown-db-9a356.firebaseapp.com',
  databaseURL: 'https://crown-db-9a356.firebaseio.com',
  projectId: 'crown-db-9a356',
  storageBucket: 'crown-db-9a356.appspot.com',
  messagingSenderId: '211797662453',
  appId: '1:211797662453:web:4851e2653e6012ade143bc',
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
        ...additionalData,
      });
    } catch (err) {
      console.log('Error creating user', err.message);
    }
  }
  console.log(userRef);
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGoggle = () => auth.signInWithPopup(provider);

export default firebase;
