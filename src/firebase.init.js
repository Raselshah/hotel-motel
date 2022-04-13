// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM8qaD6HGMHqaWfGtkvFVcN0dzx8Br-6M",
  authDomain: "hotel-motel-int.firebaseapp.com",
  projectId: "hotel-motel-int",
  storageBucket: "hotel-motel-int.appspot.com",
  messagingSenderId: "992586308307",
  appId: "1:992586308307:web:e9b5b80063847943d4d226",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
