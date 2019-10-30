import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyDXxSt5lg5LYViZ16Y-v06sncs30K5gLvQ",
  authDomain: "ninja-chat-71d7b.firebaseapp.com",
  databaseURL: "https://ninja-chat-71d7b.firebaseio.com",
  projectId: "ninja-chat-71d7b",
  storageBucket: "ninja-chat-71d7b.appspot.com",
  messagingSenderId: "940558113203",
  appId: "1:940558113203:web:0c97da70fbbb26fb8d13c6",
  measurementId: "G-SCJE2J64CQ"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebaseApp.firestore()
