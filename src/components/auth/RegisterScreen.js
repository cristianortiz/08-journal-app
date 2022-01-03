import React from "react";
import { NavLink } from "react-router-dom";
import useForm from "../hooks/useForm";
import validator from "validator";
import { useDispatch } from "react-redux";
import { removeError, setError } from "../../actions/ui";
const RegisterScreen = () => {
  const dispatch = useDispatch();
  //custom hook to process register form
  const [formValues, handleInputChange] = useForm({
    firstname: "",
    email: "",
    password: "",
    password_confirm: "",
  });
  const { firstname, email, password, password_confirm } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log("Validated Form");
    }
  };
  //form validation function
  const isFormValid = () => {
    if (firstname.trim().length === 0) {
      dispatch(setError("firstname is required"));
      return false;
    }
    if (!validator.isEmail(email)) {
      dispatch(setError("email is not valid"));
      return false;
    }
    if (password !== password_confirm && password.length < 5) {
      dispatch(
        setError("password must be equals and should be at least 6 characters")
      );
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register a new account</h3>
      <form onSubmit={handleSubmit}>
        <div className="auth__alert-error">There is errors in form</div>
        <input
          className="auth__input"
          type="firstname"
          placeholder="Name"
          name="firstname"
          onChange={handleInputChange}
          value={firstname}
        />
        <input
          className="auth__input"
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleInputChange}
          value={email}
        />

        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInputChange}
          value={password}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Repeate password"
          name="password_confirm"
          onChange={handleInputChange}
          value={password_confirm}
        />

        <button type="submit" className="btn btn-primary btn-block mb-5">
          Join Us
        </button>

        <NavLink className="link" to="/auth/login">
          Already have an account?
        </NavLink>
      </form>
    </>
  );
};

export default RegisterScreen;
