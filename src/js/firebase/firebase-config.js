
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAMXZDfv6CqdGoqxDspWGAidWRL9he6K2w",
  authDomain: "bookshelf-2-ded0a.firebaseapp.com",
  projectId: "bookshelf-2-ded0a",
  storageBucket: "bookshelf-2-ded0a.appspot.com",
  messagingSenderId: "182929361670",
  appId: "1:182929361670:web:65892db05a4e9f6c5aec87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app