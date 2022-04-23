import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA45TwBpqm5fXllXyPZ2r5biShsXJS-_jw",
  authDomain: "gamestore-e9dc3.firebaseapp.com",
  projectId: "gamestore-e9dc3",
  storageBucket: "gamestore-e9dc3.appspot.com",
  messagingSenderId: "57890609208",
  appId: "1:57890609208:web:745b9ce97eb6a1aa63eecd",
  measurementId: "G-86H8HBG5VM"
};

firebase.initializeApp(firebaseConfig);

export default firebase;