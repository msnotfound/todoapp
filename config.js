import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAdu_mdpf2fY7PlhUqFPlCm136gmwO8TYo",
  authDomain: "todoapp-ce8fc.firebaseapp.com",
  projectId: "todoapp-ce8fc",
  storageBucket: "todoapp-ce8fc.firebasestorage.app",
  messagingSenderId: "747607141723",
  appId: "1:747607141723:web:f251ccc1ba90717f18fe7e",
  measurementId: "G-L4GJ4Q72EY"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


export { firebase };