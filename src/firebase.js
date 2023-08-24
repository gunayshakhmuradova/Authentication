import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYbMuhn99ZmVoaRWCh5wa3hlkIR4Ofqo4",
  authDomain: "fir-d3999.firebaseapp.com",
  projectId: "fir-d3999",
  storageBucket: "fir-d3999.appspot.com",
  messagingSenderId: "556747716886",
  appId: "1:556747716886:web:dd5d1492531fc50ac7f837"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);