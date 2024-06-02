import React, { useState } from "react";
import InputField from "../InputField/InputField";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebaseUtil";
import "./SignUp.styles.scss";
import Button from "../Button/Button";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else if (error.code === "auth/weak-password") {
        alert("Password should be at least 6 characters");
      } else {
        console.log("User creation error: ", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <InputField
          labelText="Display Name"
          type="text"
          isRequired={true}
          handleChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <InputField
          labelText="Confirm Password"
          type="password"
          isRequired={true}
          handleChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
