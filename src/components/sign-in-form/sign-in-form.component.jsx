import { useState, useContext } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import InputForm from "../form-input/form-input.component";
import "./sign-in-form-styles.scss";
import Button from "../button/button.component";

import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);



  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userAuth = await createUserDocumentFromAuth(user);
    console.log(userAuth);
  };

  //setFormFields(defaultFormFields);
  console.log(formFields);

  const formChangeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
    //console.log({...formFields});
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      setCurrentUser(user);
      resetFormField();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;

        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }

      console.log(error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2> Already have an account? </h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={onSubmitHandler}>
        <InputForm
          label="email"
          type="email"
          name="email"
          required
          onChange={formChangeHandler}
          value={email}
        />
        <InputForm
          label="Password"
          type="password"
          name="password"
          required
          onChange={formChangeHandler}
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit" Children="Sign In" />
          <Button
            type="button"
            buttonType="google"
            onClick={signInWithGoogle}
            Children="Google Sign In"
          ></Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
