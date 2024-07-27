import React from "react";
import InputField from "../InputField/InputField";
import "./SignUp.styles.scss";
import Button from "../Button/Button";
import { useSIgnUp } from "../../hooks/useSignUp";

const SignUp = () => {
  const {
    handleSubmit,
    handleChange,
    displayName,
    email,
    password,
    confirmPassword,
  } = useSIgnUp();
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
