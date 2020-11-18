import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyCm3rbs8hSdDQrza0BDz025T5VmBIndTFE",
    authDomain: "fatinchillz.firebaseapp.com",
    databaseURL: "https://fatinchillz.firebaseio.com",
    projectId: "fatinchillz",
    storageBucket: "fatinchillz.appspot.com",
    messagingSenderId: "782070476420",
    appId: "1:782070476420:web:1b6e446ee7f0a1550f1cd1",
    measurementId: "G-D1MFN4W0MT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true})

  export const db= firebase.firestore()
  export const storage=firebase.storage()
  export default firebase