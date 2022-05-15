import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import SignUpForm from "../../components/Sign-up/sign-up-form.component";
import SignInForm from "../../components/Sign-in/sign-in-form.component";
import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  auth,
} from "../../utils/firebase/firebase.utils";
import "./authenticate.style.scss";

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
    <div className="auths-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
