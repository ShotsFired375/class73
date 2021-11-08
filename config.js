
// Import the functions you need from the SDKs you need
import firebase from 'firebase';
require('@firebase/firestore')
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC8g7fnQxKD-LlB0wAqPObrJfVaBtL0boU",
  authDomain: "class71libraryapp.firebaseapp.com",
  projectId: "class71libraryapp",
  storageBucket: "class71libraryapp.appspot.com",
  messagingSenderId: "394707256666",
  appId: "1:394707256666:web:24af069d4ad6bca823df63"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();