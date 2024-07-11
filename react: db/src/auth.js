import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_apiKey}`,
  authDomain: `${process.env.REACT_APP_authDomain}`,
  databaseURL: `${process.env.REACT_APP_databaseURL}`,
  projectId: `${process.env.REACT_APP_projectId}`,
  storageBucket: `${process.env.REACT_APP_storageBucket}`,
  messagingSenderId: `${process.env.REACT_APP_messagingSenderId}`,
  appId: `${process.env.REACT_APP_appId}`
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence)
.then(() => {
    //
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
});