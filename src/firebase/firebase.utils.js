import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD1Xx73LdH040Iv6McAoQ_TwWGW0_lYCUY",
    authDomain: "crown-db-e7da6.firebaseapp.com",
    databaseURL: "https://crown-db-e7da6.firebaseio.com",
    projectId: "crown-db-e7da6",
    storageBucket: "crown-db-e7da6.appspot.com",
    messagingSenderId: "160362007720",
    appId: "1:160362007720:web:52e4123a72d9d13eec469d",
    measurementId: "G-31XWFPVWYT"
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(userAuth)
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
      // console.log(userRef)
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () =>  auth.signInWithPopup(provider);


export default firebase;