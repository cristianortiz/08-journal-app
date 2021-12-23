import React from "react";
import { NavLink } from "react-router-dom";
const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Register a new account</h3>
      <form>
        <input
          className="auth__input"
          type="firstname"
          placeholder="Name"
          name="firstname"
        />
        <input
          className="auth__input"
          type="email"
          placeholder="Email"
          name="email"
        />

        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
        />
        <input
          className="auth__input"
          type="password_confirm"
          placeholder="Repeate password"
          name="password_confirm"
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
