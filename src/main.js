import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIzK2DKnnGWhqZSctH3oOXOHWpde-uMX4",
  authDomain: "vuefirebaseworkbench.firebaseapp.com",
  projectId: "vuefirebaseworkbench",
  storageBucket: "vuefirebaseworkbench.appspot.com",
  messagingSenderId: "117362108162",
  appId: "1:117362108162:web:5d5b6fd29eb4994920441b",
  measurementId: "G-H65CRQ13J4"
};

// utils
const db = firebase.firestore();
// const auth = firebase.auth();

// collection references
// const usersCollection = db.collection('users')
// const postsCollection = db.collection('posts')
// const commentsCollection = db.collection('comments')
// const likesCollection = db.collection('likes')

firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(store)
  .use(router)
  .use(db)
  .mount("#app");
