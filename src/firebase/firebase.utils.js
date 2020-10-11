import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD1Xx73LdH040Iv6McAoQ_TwWGW0_lYCUY",
    authDomain: "crown-db-e7da6.firebaseapp.com",
    databaseURL: "https://crown-db-e7da6.firebaseio.com",
    projectId: "crown-db-e7da6",
    storageBucket: "crown-db-e7da6.appspot.com",
    messagingSenderId: "160362007720",
    appId: "1:160362007720:web:52e4123a72d9d13eec469d",
    measurementId: "G-31XWFPVWYT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;