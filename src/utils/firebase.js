import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApAkSHBRfeu6mR64zEVwI6UAdEJ0PZIIU",
  authDomain: "netflix-gpt-d9966.firebaseapp.com",
  projectId: "netflix-gpt-d9966",
  storageBucket: "netflix-gpt-d9966.appspot.com",
  messagingSenderId: "1022978907651",
  appId: "1:1022978907651:web:95918a56689f2ea5fe3836",
  measurementId: "G-S7V5EQP17B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();