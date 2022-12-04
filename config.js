import firebase from "firebase";

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA7U3zvJYswCdIGVNUlekSKNuQbupaYMZ0",
  authDomain: "team-voting-app-6479c.firebaseapp.com",
  databaseURL: "https://team-voting-app-6479c-default-rtdb.firebaseio.com",
  projectId: "team-voting-app-6479c",
  storageBucket: "team-voting-app-6479c.appspot.com",
  messagingSenderId: "194035569141",
  appId: "1:194035569141:web:4ae00c0682f3ab780550bc",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
