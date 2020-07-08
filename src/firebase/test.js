import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("bDsJYhgkVCxVfnICYjHz")
  .collection("cartItems")
  .doc("B0yQTAdh0gc2rnbFxMt2");

firestore.doc("/users/bDsJYhgkVCxVfnICYjHz/cartItems/B0yQTAdh0gc2rnbFxMt2");
firestore.collection("/users/bDsJYhgkVCxVfnICYjHz/cartItems");
