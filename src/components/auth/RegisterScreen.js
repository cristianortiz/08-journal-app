import React from "react";
import { NavLink } from "react-router-dom";
import useForm from "../hooks/useForm";
const RegisterScreen = () => {
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
    console.log(firstname, email, password, password_confirm);
  };

  return (
    <>
      <h3 className="auth__title">Register a new account</h3>
      <form onSubmit={handleSubmit}>
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
          type="password_confirm"
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
