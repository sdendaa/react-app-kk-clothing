import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-sMQ8jU-lxwZwYcJhLaRgitPFDDnfndo",
  authDomain: "kk-clothing-db.firebaseapp.com",
  projectId: "kk-clothing-db",
  storageBucket: "kk-clothing-db.appspot.com",
  messagingSenderId: "404017549669",
  appId: "1:404017549669:web:8cb57d906fd6eadb7d918c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = { displayName: "Tola" }
) => {
  if (!userAuth) return;

  console.log("userAuth ", userAuth);
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log("userDocRef ", userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log("userSnapshot ", userSnapshot);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListenere = (callback) =>
  onAuthStateChanged(auth, callback);
