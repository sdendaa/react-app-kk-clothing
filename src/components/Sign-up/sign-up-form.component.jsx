import { useState, useContext } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import "./sign-up-form.style.scss";
import Button from "../button/button.component";

import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  console.log("Hit with value ", setCurrentUser);
  console.log("Hit");

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  console.log(formFields);
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(password);
    console.log(confirmPassword);
    if (password !== confirmPassword) {
      alert("Password do not match!");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      setCurrentUser(user);
      await createUserDocumentFromAuth(user, { displayName });
      console.log(user);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use, " + email);
      } else {
        console.log("Error happen when create user ", error);
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
      <span>Sign Up with your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          required
          onChange={handleChange}
          type="text"
          name="displayName"
          value={displayName}
        />
        <FormInput
          label="Email"
          required
          onChange={handleChange}
          type="email"
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          required
          onChange={handleChange}
          type="password"
          name="password"
          value={password}
        />
        <FormInput
          label="Confirm Password"
          required
          onChange={handleChange}
          type="password"
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up </Button>
      </form>
    </div>
  );
};
export default SignUpForm;
