import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyJCpbzdQxXmsAiC2kAv1eT_d3AhYaZuE",
  authDomain: "facebookclonezakiy.firebaseapp.com",
  databaseURL: "https://facebookclonezakiy-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "facebookclonezakiy",
  storageBucket: "facebookclonezakiy.appspot.com",
  messagingSenderId: "719379481864",
  appId: "1:719379481864:web:0aca1812d06f312bb958bd",
  measurementId: "G-S8TK738WDJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db
