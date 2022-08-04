import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

// import { useAuthState } from "react-firebase-hooks/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnGkl83oT7JHsDgUVxvjFnWNUYWqrZFgE",
  authDomain: "dts-projek-akhir.firebaseapp.com",
  projectId: "dts-projek-akhir",
  storageBucket: "dts-projek-akhir.appspot.com",
  messagingSenderId: "387309350983",
  appId: "1:387309350983:web:37865e7a0f0bc6a9ed4162",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerWithEmail = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const userRegMsg = "Your Account registered successfully";
    console.log(response.user);
    document.getElementById("errorMessage").innerHTML = userRegMsg;
  } catch (err) {
    console.log(err.message);
    document.getElementById("errorMessage").innerHTML = err.code;
  }
};

const signInWithMail = async (auth, email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
  } catch (err) {
    const msg = "Invalid Email or Password";

    document.getElementById("errorMessage").innerHTML = msg;
  }
};

const signOutFromApps = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

export { auth, registerWithEmail, signInWithMail, signOutFromApps };
