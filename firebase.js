// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getAnalytics
} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAYbovrktPjmgTDcdAbMgJJm2tOZSU7Bk0",
    authDomain: "financial-blog-d28f4.firebaseapp.com",
    projectId: "financial-blog-d28f4",
    storageBucket: "financial-blog-d28f4.appspot.com",
    messagingSenderId: "214991808189",
    appId: "1:214991808189:web:9e6128ba1c83b3a29c39d4",
    measurementId: "G-LKWWX0MR1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
