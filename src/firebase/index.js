import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBYUvwVepUVMixtFpx0KuBXpnC7LQgmYiY",
    authDomain: "ch-react-ecommerce-803b0.firebaseapp.com",
    projectId: "ch-react-ecommerce-803b0",
    storageBucket: "ch-react-ecommerce-803b0.appspot.com",
    messagingSenderId: "185876537833",
    appId: "1:185876537833:web:1bccf76089007367942b78"
})

export const getFirebase = () => app

export const getFirestore = () => firebase.firestore(app)