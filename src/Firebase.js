 import firebase from "firebase/app";
 import "firebase/firestore";

 const firebaseApp = firebase.initializeApp ({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  });

  const db = firebaseApp.firestore();



   export {db}; 
