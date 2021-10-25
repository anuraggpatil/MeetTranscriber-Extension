// import firebase from "firebase/compat/app"; //using compat in the new versions is mandatory!s
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuOd8iJvNJi1LYGeeVjZXrqFrhDUV-RWU",
  authDomain: "meet-transcriber.firebaseapp.com",
  projectId: "meet-transcriber",
  storageBucket: "meet-transcriber.appspot.com",
  messagingSenderId: "954018788223",
  appId: "1:954018788223:web:647f6d0ba2636b7dcc604a",
  measurementId: "G-5S28K0FPS3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(firebaseApp);

export { auth, onAuthStateChanged };

function get() {
  chrome.tabs.getSelected(null, function (tab) {
      tabID = tab.id;
      tabUrl = tab.url;
      document.getElementById("op").innerHTML = tabUrl;
  });
  const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(" at authProvider use Effect", user);
  });
}
get();