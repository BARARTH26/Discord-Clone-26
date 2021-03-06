import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDtQ_JDLawXHJBRlPEJM4dFGAgl6RvcRag",
    authDomain: "slack-clone-17a45.firebaseapp.com",
    projectId: "slack-clone-17a45",
    storageBucket: "slack-clone-17a45.appspot.com",
    messagingSenderId: "762066672556",
    appId: "1:762066672556:web:878a2a18602a17a3c2f809"
  };

const firebasApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;