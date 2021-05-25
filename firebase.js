import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDQasbRnydEzxO1u_g3V_OSuOJktoXW9xU",
  authDomain: "facebook-clone-14bb7.firebaseapp.com",
  projectId: "facebook-clone-14bb7",
  storageBucket: "facebook-clone-14bb7.appspot.com",
  messagingSenderId: "357659542688",
  appId: "1:357659542688:web:91851fe86476e7783eb5c5",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
