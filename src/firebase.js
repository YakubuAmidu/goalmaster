// import * as firebase from 'firebase';
// const firebase = require('firebase/app');
const firebase = require('firebase/app');
require('firebase');

const config = {
  apiKey: "AIzaSyBBEOZdOpgoTaW3Ps79Gs3KtmTFjzS-N6I",
  authDomain: "goalmaster-d27da.firebaseapp.com",
  databaseURL: "https://goalmaster-d27da.firebaseio.com",
  projectId: "goalmaster-d27da",
  storageBucket: "goalmaster-d27da.appspot.com",
  messagingSenderId: "514959592212",
  appId: "1:514959592212:web:d567bbba65ddc9755bd001",
  measurementId: "G-XTN8ZPF9TC"
};
export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
