import { initializeApp } from "firebase";

const app = initializeApp({
  apiKey: "AIzaSyDDuWZRVUxDmiQANBnvlarXQcsjLe7Or-M",
  authDomain: "my-porftolio.firebaseapp.com",
  databaseURL: "https://my-porftolio.firebaseio.com",
  projectId: "my-porftolio",
  storageBucket: "my-porftolio.appspot.com",
  messagingSenderId: "1037420792439",
  appId: "1:1037420792439:web:5ef257df2ebc2bc7df1472",
});

export const db = app.database();
export const namesRef = db.ref("contactForm");
export const projectRef = db.ref("Projects");
export const aboutRef = db.ref("Aboutme");
