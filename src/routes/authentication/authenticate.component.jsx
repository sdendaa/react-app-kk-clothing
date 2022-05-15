import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import SignUpForm from "../../components/Sign Up/sign-in-form.component";
import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  auth,
} from "../../utils/firebase/firebase.utils";

const Authentication = () => {
  useEffect(() => {
    const response = getRedirectResult(auth);
    if (response) {
      const userDocRef = createUserDocumentFromAuth(response.user);
      console.log(userDocRef);
    }
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log("response ", user);
    const userDecRef = await createUserDocumentFromAuth(user);
    console.log("userDecRef ", userDecRef);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Pop Up</button>
      <SignUpForm />
    </div>
  );
};

export default Authentication;
