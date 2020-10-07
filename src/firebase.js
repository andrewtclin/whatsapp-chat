import firebase, { initializeApp } from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_ZPGEVelcjxPwVa-HRMqg2KKCtXBZRac",
  authDomain: "whatsapp-b41b1.firebaseapp.com",
  databaseURL: "https://whatsapp-b41b1.firebaseio.com",
  projectId: "whatsapp-b41b1",
  storageBucket: "whatsapp-b41b1.appspot.com",
  messagingSenderId: "495887620196",
  appId: "1:495887620196:web:1969aa00cabfcd3888a771",
  measurementId: "G-R91R86Q4LL",
};

// Use firebase service with the above configuration
const firebaseApp = initializeApp(firebaseConfig);
// Give access to firestore database
const db = firebaseApp.firestore();
// Responsible for authentication
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); // For Google authentication

export { auth, provider };
export default db;
