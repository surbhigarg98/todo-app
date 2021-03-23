import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB-mg3AphQ3cy5xFP4VivpksmR8vvq6ONc",
  authDomain: "todo-app-b2e8f.firebaseapp.com",
  databaseURL: "https://todo-app-b2e8f.firebaseio.com",
  projectId: "todo-app-b2e8f",
  storageBucket: "todo-app-b2e8f.appspot.com",
  messagingSenderId: "407503609130",
  appId: "1:407503609130:web:b7375afd4ccaeec72b5253",
  measurementId: "G-W51QZ21DEE"
})

const db = firebaseApp.firestore();

export default db