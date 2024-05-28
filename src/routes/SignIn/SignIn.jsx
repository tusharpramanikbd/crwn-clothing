import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebaseUtil.js";

const SignIn = () => {
  const logInGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logInGoogleUser}>Sign in with google popup</button>
    </div>
  );
};

export default SignIn;
