import React from "react";
import SignUp from "../../components/SignUp/SignUp.jsx";
import SignIn from "../../components/SignIn/SignIn.jsx";
import "./Authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
