
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { GoogleAuthProvider,getAuth} from "firebase/auth";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBZFxwU9wigqRTx6v3-gaHjaCVXLXDYK-Q",
    authDomain: "green-web-4d493.firebaseapp.com",
    projectId: "green-web-4d493",
    storageBucket: "green-web-4d493.appspot.com",
    messagingSenderId: "1706760811",
    appId: "1:1706760811:web:2d9054303ba66a298eef2e",
    measurementId: "G-NFQ9B8X1W5"
});
  //const app = initializeApp(firebaseConfig);
  //const app= !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  //let db = app.firestore();
 
  //const ReDocs=onSnapshot(collection(db,'docs'));
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  export {auth,provider};
  export  const db = getFirestore(firebaseApp);;