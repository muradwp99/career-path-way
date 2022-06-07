// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFpY2Flyr7R-5k5lnkAoEuravhZ9UNYG0",
    authDomain: "career-way.firebaseapp.com",
    projectId: "career-way",
    storageBucket: "career-way.appspot.com",
    messagingSenderId: "781471867231",
    appId: "1:781471867231:web:2b44618d84b30176d496ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;