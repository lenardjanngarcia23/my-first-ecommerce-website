import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDMG1vDKtOMby8XCyIObOSAQq9gjbfajZY",
    authDomain: "crown-db-c85e2.firebaseapp.com",
    projectId: "crown-db-c85e2",
    storageBucket: "crown-db-c85e2.appspot.com",
    messagingSenderId: "314360679654",
    appId: "1:314360679654:web:c020bc5c0a556fbd167f27",
    measurementId: "G-5L193NHQKD"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;