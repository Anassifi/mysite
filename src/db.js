import firebase from "firebase/app";
import "firebase/database";

export const db = firebase
  .initializeApp({ databaseURL: "https://my-porftolio.firebaseio.com" })
  .database();
