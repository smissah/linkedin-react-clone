import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBSjqZgu59xl0hKHwJKpr5r6PIRxduP4hs",
  authDomain: "linkedin-react-clone-b1afd.firebaseapp.com",
  projectId: "linkedin-react-clone-b1afd",
  storageBucket: "linkedin-react-clone-b1afd.appspot.com",
  messagingSenderId: "688383384717",
  appId: "1:688383384717:web:d353a5013dfcb3bf8e96c4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
