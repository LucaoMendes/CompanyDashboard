import firebase from "firebase"
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAMoUHgDkTHWD0zYmgCp8nIS7TI69p4nZc",
  authDomain: "compdashboard.firebaseapp.com",
  projectId: "compdashboard",
  storageBucket: "compdashboard.appspot.com",
  messagingSenderId: "287940292173",
  appId: "1:287940292173:web:c441d197c714ca28a47604",
  measurementId: "G-XPEST5B41L"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ experimentalForceLongPolling: true })

const database = firebase.firestore()
export default database
  