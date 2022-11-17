import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAae6Zq30pPUnt1c2DNNylBBblxTyBIrz0",
    authDomain: "neryosmoney.firebaseapp.com",
    projectId: "neryosmoney",
    storageBucket: "neryosmoney.appspot.com",
    messagingSenderId: "987571319972",
    appId: "1:987571319972:web:f7489090e39010b4c8a231"
  };

  // init firebase

  firebase.initializeApp(firebaseConfig)
  
  // init service
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  export { projectFirestore, projectAuth }