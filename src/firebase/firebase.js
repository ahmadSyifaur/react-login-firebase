import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig={
    apiKey: "AIzaSyBnhfJfFewbboIqUBWq4tlMtS16hlyK2AI",
    authDomain: "react-firebase-modul-10.firebaseapp.com",
    databaseURL: "https://react-firebase-modul-10.firebaseio.com",
    projectId: "react-firebase-modul-10",
    storageBucket: "react-firebase-modul-10.appspot.com",
    messagingSenderId: "905258645038",
    appId: "1:905258645038:web:66339736085385094091bf"
}

export const myFirebase=firebase.initializeApp(firebaseConfig);
const baseDb= myFirebase.firestore();
export const db = baseDb;