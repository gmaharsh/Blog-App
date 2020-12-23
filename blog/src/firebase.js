import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDyYlapsLFamiWJmHRUHo0jnv10D0Cvp74",
  authDomain: "blog-app-ab116.firebaseapp.com",
  databaseURL: "https://blog-app-ab116-default-rtdb.firebaseio.com",
  projectId: "blog-app-ab116",
  storageBucket: "blog-app-ab116.appspot.com",
  messagingSenderId: "1016898307632",
  appId: "1:1016898307632:web:7242df5787d26ac1f58ff5"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;