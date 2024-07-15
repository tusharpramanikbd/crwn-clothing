import { useState } from "react";
import { useDispatch } from "react-redux";
import { signInWithGooglePopup } from "../utils/firebase/firebaseUtil";

const defaultFormFields = {
  email: "",
  password: "",
};

export const useSignIn = () => {
  // const dispatch = useDispatch();
  // const [formFields, setFormFields] = useState(defaultFormFields);
  // const { email, password } = formFields;

  // const resetFormFields = () => {
  //   setFormFields(defaultFormFields);
  // };

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
    } catch (error) {
      console.error("Google SignIn Failed: " + error);
    }
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     dispatch(emailSignInStart(email, password));

  //     resetFormFields();
  //   } catch (error) {
  //     switch (error.code) {
  //       case "auth/invalid-credential":
  //         alert("Incorrect password or email");
  //         break;
  //       default:
  //         console.log(error);
  //     }
  //   }
  // };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setFormFields({ ...formFields, [name]: value });
  // };

  return {
    signInWithGoogle,
  };
};
