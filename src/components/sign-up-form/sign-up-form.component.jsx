import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import InputForm from "../form-input/form-input.component";
import "./sign-up-form-styles.scss";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;


  const resetFormField = () => {
    setFormFields(defaultFormFields);
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
    if (password !== confirmPassword) return;

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });



      resetFormField();

      //user.displayName = displayName;
      //const userDocRef = await createUserDocumentFromAuth(user);
      //console.log(userDocRef);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("can not create user , email already in use");
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2> don't have an account? </h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={onSubmitHandler}>
        <InputForm
          label="Display Name"
          type="text"
          name="displayName"
          required
          onChange={formChangeHandler}
          value={displayName}
        />
        <InputForm
          label="Email"
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
        <InputForm
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          required
          onChange={formChangeHandler}
          value={confirmPassword}
        />
        <Button type="submit" Children="Sign UP" />
      </form>
    </div>
  );
};
export default SignUpForm;
