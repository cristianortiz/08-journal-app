import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { login } from "../../actions/auth";
import useForm from "../hooks/useForm";

const LoginScreen = () => {
  //reduc dispatch hooks to trigger the actions
  const dispatch = useDispatch();
  //customHook to manage form
  const [formValues, handleInputChange] = useForm({
    email: "jon@gmail.com",
    password: "1234",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    //call the dispatch to trigger login action with uid and username params
    //wich will be returned later by firebase login backend function
    dispatch(login(23432, "Jon Doe"));
  };

  const { email, password } = formValues;
  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin}>
        <input
          className="auth__input"
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />

        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>

        <div className="auth__social-networks">
          <p>Login with </p>
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <NavLink className="link" to="/auth/register">
          Create New Account
        </NavLink>
      </form>
    </>
  );
};

export default LoginScreen;
