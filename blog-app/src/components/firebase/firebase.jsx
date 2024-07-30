import { initializeApp } from "firebase/app";
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBArrGlX5ld7jrojHqDktXauXEULfzKwy4",
  authDomain: "blogapp-992fe.firebaseapp.com",
  projectId: "blogapp-992fe",
  storageBucket: "blogapp-992fe.appspot.com",
  messagingSenderId: "31866488050",
  appId: "1:31866488050:web:5c7e36917b25953a61bc6b"
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);

export default fb