import { makeAutoObservable } from "mobx";
import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

class AuthStore {
  currentUser: firebase.User | null = null;
  loading?: boolean;

  constructor() {
    makeAutoObservable(this);
  }

  auth() {
    this.setLoading(true);
    app.auth().onAuthStateChanged((user) => {
      this.setUser(user);
      this.setLoading(false);
    });
  }
  async login(email: string, password: string) {
    return app.auth().signInWithEmailAndPassword(email, password);
  }
  async signup(email: string, password: string) {
    return app.auth().createUserWithEmailAndPassword(email, password);
  }
  async signout() {
    return app.auth().signOut();
  }

  setLoading(v: boolean) {
    this.loading = v;
  }

  setUser(v: firebase.User | null) {
    this.currentUser = v;
  }
}

export default new AuthStore();