import { useState } from "react";
const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
const SignUpForm = () => {
  

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName,email,password,confirmPassword} = formFields;

  //setFormFields(defaultFormFields);
  console.log(formFields);

  const formChangeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields( {...formFields,[name]:value})
    //console.log({...formFields});
  };

  return (
    <div>
      <form>
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
