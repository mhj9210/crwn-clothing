import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnU-9YGzj2Wt70xbM_InisV0D53i2uQpY",
  authDomain: "store-db-4a1d9.firebaseapp.com",
  databaseURL: "https://store-db-4a1d9.firebaseio.com",
  projectId: "store-db-4a1d9",
  storageBucket: "store-db-4a1d9.appspot.com",
  messagingSenderId: "238824064866",
  appId: "1:238824064866:web:05d8318a55bd65724f0e3b",
  measurementId: "G-XSGHK68Y38",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
