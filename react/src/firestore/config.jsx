// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3U4NeO1QXf1mY3Xk-Y_bGDnoMnnTFNnY",
    authDomain: "proyecto-ecommerce-mq-2022.firebaseapp.com",
    projectId: "proyecto-ecommerce-mq-2022",
    storageBucket: "proyecto-ecommerce-mq-2022.appspot.com",
    messagingSenderId: "372762969663",
    appId: "1:372762969663:web:f0b155b0cc7da590c59a8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestoreApp = () => {
    return app
}