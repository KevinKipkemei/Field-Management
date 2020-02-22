 import firebase from "firebase/app";
 import "firebase/firestore";

 const firebaseApp = firebase.initializeApp ({
   
  });

  const db = firebaseApp.firestore();



   export {db}; 
