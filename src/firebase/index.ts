import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAx9ndfnzSNJjW1F6ngKQbI1_z3aEixm5Y",
  authDomain: "click-mother-care.firebaseapp.com",
  projectId: "click-mother-care",
  storageBucket: "click-mother-care.firebasestorage.app",
  messagingSenderId: "1023279366013",
  appId: "1:1023279366013:web:ad9e9929472ac581b5d614",
};

const app = initializeApp(firebaseConfig);
export const firebasesStorage = getStorage(app);
