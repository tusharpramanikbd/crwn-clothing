import React from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebaseUtil.js";
import SignUp from "../../components/SignUp/SignUp.jsx";

const SignIn = () => {
  const logInGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logInGoogleUser}>Sign in with google popup</button>
      <SignUp />
    </div>
  );
};

export default SignIn;
