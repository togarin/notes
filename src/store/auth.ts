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
  constructor() {
    makeAutoObservable(this);
  }
  //   currentUser: any; - не должен быть any, должен быть объект который получаю от firebase(?)
  currentUser: any;
  loading?:boolean;

 public auth() {
    this.loading = true;
    app.auth().onAuthStateChanged((user) => {
      this.currentUser = user;
      this.loading = false;
    });
  }
  public login(email:string, password:string) {
    app.auth().signInWithEmailAndPassword(email, password);
  }
  public signup(email:string, password:string) {
    app.auth().createUserWithEmailAndPassword(email, password);
  }
  public signout() {
    app.auth().signOut();
  }
}

export default new AuthStore();
