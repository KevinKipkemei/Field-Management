 import firebase from "firebase";

 const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyCkE-xmQualBe0m713t3wf8zPr5U5SChYE",
    authDomain: "field-d538a.firebaseapp.com",
    databaseURL: "https://field-d538a.firebaseio.com",
    projectId: "field-d538a",
    storageBucket: "field-d538a.appspot.com",
    messagingSenderId: "772294768735",
    appId: "1:772294768735:web:1e2c558a981215af6583ea",
    measurementId: "G-40ZLQMLCEE"
  });

  const db = firebaseApp.firestore();



   export {db}; 