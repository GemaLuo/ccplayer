import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import "firebase/compat/firestore";
// import { getStorage } from 'firebase/storage';

const app=firebase.initializeApp({
  apiKey: "AIzaSyCCfg9jCUB4Xy-EKSOKLZACAQnpU-E6Jwk",
  authDomain: "music-app-72bef.firebaseapp.com",
  projectId: "music-app-72bef",
  storageBucket: "music-app-72bef.appspot.com",
  messagingSenderId: "303359901602",
  appId: "1:303359901602:web:d878f194d3d7e0bb2a3cfb"
})

// export const db = firebase.firestore()

// export const storage = getStorage(app);

export const auth = app.auth()

export default app
