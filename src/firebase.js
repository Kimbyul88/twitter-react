import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDjpHp_cSyaPzdLjMGrGpgQ3EU5zQ-gQ14",
  authDomain: "twitter-clone-b91f7.firebaseapp.com",
  projectId: "twitter-clone-b91f7",
  storageBucket: "twitter-clone-b91f7.appspot.com",
  messagingSenderId: "6083563077",
  appId: "1:6083563077:web:11efb0d054de404ced1d2c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
