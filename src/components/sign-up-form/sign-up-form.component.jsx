import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
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
  }

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
      user.displayName = displayName;
      const userDocRef = await createUserDocumentFromAuth(user);
      resetFormField();
      console.log(userDocRef);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label>display name</label>
        <input
          type="text"
          name="displayName"
          required
          onChange={formChangeHandler}
          value={displayName}
        />
        <label>email</label>
        <input
          type="email"
          name="email"
          required
          onChange={formChangeHandler}
          value={email}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          required
          onChange={formChangeHandler}
          value={password}
        />
        <label>confirm password</label>
        <input
          type="password"
          name="confirmPassword"
          required
          onChange={formChangeHandler}
          value={confirmPassword}
        />
        <button type="submit">Sign UP</button>
      </form>
    </div>
  );
};
export default SignUpForm;
