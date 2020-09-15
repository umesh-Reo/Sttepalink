import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyBBtBcTb04h_Jb23ZSI4Mg2Vp09sPK5AXo",
    authDomain: "sttepalink.firebaseapp.com",
    databaseURL: "https://sttepalink.firebaseio.com",
    projectId: "sttepalink",
    storageBucket: "sttepalink.appspot.com",
    messagingSenderId: "168471582610",
    appId: "1:168471582610:web:f942c774733e2ac554d34b",
    measurementId: "G-S9QWZG5DE9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 
  firebase.analytics();

  const storage = firebase.storage();

  export {
    storage, firebase as default
  }