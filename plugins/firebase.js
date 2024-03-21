// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsbR1Q-OHI_k_vFpOShel0tPW73tXeLLQ",
  authDomain: "nuxt-spa-book-app-7549b.firebaseapp.com",
  projectId: "nuxt-spa-book-app-7549b",
  storageBucket: "nuxt-spa-book-app-7549b.appspot.com",
  messagingSenderId: "541559634636",
  appId: "1:541559634636:web:7c0b22fafba8f318fca069"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default (context, inject) => {
    inject('firebase', firebaseApp)
}