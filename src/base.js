import Rebase from 're-base';
import * as firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDXC6y2xO9pKXc_Iei1ODZH0oxNvEBLBS4',
  authDomain: 'catch-of-the-day-d4155.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-d4155.firebaseio.com',
  projectId: 'catch-of-the-day-d4155',
  storageBucket: 'catch-of-the-day-d4155.appspot.com',
  messagingSenderId: '26587727999'
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;