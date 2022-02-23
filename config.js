import firebase from "firebase";


var firebaseConfig = {
  apiKey: "AIzaSyAET2X1YFfhNEyZLbknee19jV9O2SnTe_A",

  authDomain: "e-library-e56ed.firebaseapp.com",

  projectId: "e-library-e56ed",

  storageBucket: "e-library-e56ed.appspot.com",

  messagingSenderId: "785245047970",

  appId: "1:785245047970:web:aa45cf4b75728b1d67dbfb",

  measurementId: "G-G3K7BWL5LH"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
