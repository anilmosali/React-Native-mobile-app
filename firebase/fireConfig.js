import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDCE9sq0axlCjHqF_Ym61GylKsuA4q86yc",
  authDomain: "kutumbaka-b7b89.firebaseapp.com",
  databaseURL:
    "https://kutumbaka-b7b89-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kutumbaka-b7b89",
  storageBucket: "kutumbaka-b7b89.appspot.com",
  messagingSenderId: "19678880346",
  appId: "1:19678880346:web:0da806c455e495bcdcee63",
  measurementId: "G-BG4WV2KLTZ",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
