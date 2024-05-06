// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA_PbO96z8vh8QMI7O-tdhYmum_X_yXigQ",
//   authDomain: "netflixgpt-563f5.firebaseapp.com",
//   projectId: "netflixgpt-563f5",
//   storageBucket: "netflixgpt-563f5.appspot.com",
//   messagingSenderId: "804669857398",
//   appId: "1:804669857398:web:43a2fa4d07355d15100957",
//   measurementId: "G-5MMMHJNKY4"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth = getAuth();