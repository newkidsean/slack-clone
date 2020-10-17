// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD2X4OahjaTP6ekdqNHPuRpHXhQ3DxGzwU",
    authDomain: "slack-clone-2d179.firebaseapp.com",
    databaseURL: "https://slack-clone-2d179.firebaseio.com",
    projectId: "slack-clone-2d179",
    storageBucket: "slack-clone-2d179.appspot.com",
    messagingSenderId: "24768917377",
    appId: "1:24768917377:web:df20f1bc192fe4bebc0280",
    measurementId: "G-P1WQC991CQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;