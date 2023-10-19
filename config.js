//npm install firebase@8.2.3

import firebase from "firebase";
require("@firebase/firestore");
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAna2JuwCn0QsRxmOsOeOjTXQP7z5xGXp8",
  authDomain: "bibliotecaeletronica-c53e4.firebaseapp.com",
  projectId: "bibliotecaeletronica-c53e4",
  storageBucket: "bibliotecaeletronica-c53e4.appspot.com",
  messagingSenderId: "291255983446",
  appId: "1:291255983446:web:91e8ba734e12e54ed60af7"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
