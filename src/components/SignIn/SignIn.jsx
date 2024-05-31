import React, { useState } from "react";
import InputField from "../InputField/InputField";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebaseUtil";
import "./SignIn.styles.scss";
import Button from "../Button/Button";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInUserWithEmailAndPassword(email, password);
      console.log(response);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          alert("Incorrect password or email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <InputField
          labelText="Email"
          type="email"
          isRequired={true}
          handleChange={handleChange}
          name="email"
          value={email}
        />

        <InputField
          labelText="Password"
          type="password"
          isRequired={true}
          handleChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google sign in{" "}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
