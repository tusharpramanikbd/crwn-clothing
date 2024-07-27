import InputField from "../InputField/InputField";
import "./SignIn.styles.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import { useSignIn } from "../../hooks/useSIgnIn";

const SignIn = () => {
  const { signInWithGoogle, handleSubmit, handleChange, email, password } =
    useSignIn();

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
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google sign in{" "}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
