import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDeeNTs3quWhZel3lUgWCcoV5gHGE39bc4",
  authDomain: "eshop-baigiamsi.firebaseapp.com",
  projectId: "eshop-baigiamsi",
  storageBucket: "eshop-baigiamsi.appspot.com",
  messagingSenderId: "461562580154",
  appId: "1:461562580154:web:c23ded2d859b318e2c0683",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
