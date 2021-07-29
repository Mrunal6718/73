import firebase from 'firebase'; 
import '@firebase/firestore'; 
// Required for side-effects 
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBBf4lVqX3LJoKyVmJ2fKFHs0b9R7jqL-w",
    authDomain: "story-hub2-17862.firebaseapp.com",
    projectId: "story-hub2-17862",
    storageBucket: "story-hub2-17862.appspot.com",
    messagingSenderId: "657499157728",
    appId: "1:657499157728:web:4921f85ea549ff46fb4c85"
}
firebase.initializeApp(firebaseConfig);
if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig); } 

var db = firebase.firestore();
export default db