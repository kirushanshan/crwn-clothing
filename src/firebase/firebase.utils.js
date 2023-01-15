
// import firebase from "firebase/app";
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import 'firebase/compat/firestore';
// import 'firebase/database';

const config = {
    apiKey: "AIzaSyBzr2kOUkHTz70CSZI6y3ah9L6EGsKSaLY",
    authDomain: "crwn-db-8bdf1.firebaseapp.com",
    projectId: "crwn-db-8bdf1",
    storageBucket: "crwn-db-8bdf1.appspot.com",
    messagingSenderId: "254739536000",
    appId: "1:254739536000:web:09b5327e20fac7b92dae65",
    measurementId: "G-C53LKMFXM7"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = fireStore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth ;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName, 
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  };



  export const auth = firebase.auth();
  export const fireStore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;