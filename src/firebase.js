// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyASZljlTjo3yu3mNtu6aOKZkf9UwYaM2rw",
    authDomain: "recipeadda-37c72.firebaseapp.com",
    projectId: "recipeadda-37c72",
    storageBucket: "recipeadda-37c72.firebasestorage.app",
    messagingSenderId: "566219507622",
    appId: "1:566219507622:web:5e18cba1c59c5b23b97167",
    measurementId: "G-KCG1W4TYE5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);