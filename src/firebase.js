import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkPPFSyjbQuSqX_dPFd8RdSGM7FZNaVac",
  authDomain: "challenge-3ee2c.firebaseapp.com",
  projectId: "challenge-3ee2c",
  storageBucket: "challenge-3ee2c.appspot.com",
  messagingSenderId: "714940262943",
  appId: "1:714940262943:web:f7ae91b96a2df5edc9832a",
  measurementId: "G-HW1GL4Y3FC"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };