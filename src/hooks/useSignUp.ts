import { ChangeEvent, FormEvent, useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebaseUtil";
import { AuthError, AuthErrorCodes, UserCredential } from "firebase/auth";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const useSIgnUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }

    try {
      const { user } = (await createAuthUserWithEmailAndPassword(
        email,
        password
      )) as UserCredential;

      await createUserDocumentFromAuth(user, { displayName });

      resetFormFields();
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("Cannot create user, email already in use");
      } else if ((error as AuthError).code === AuthErrorCodes.WEAK_PASSWORD) {
        alert("Password should be at least 6 characters");
      } else {
        console.log("User creation error: ", error);
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return {
    handleSubmit,
    handleChange,
    displayName,
    email,
    password,
    confirmPassword,
  };
};
