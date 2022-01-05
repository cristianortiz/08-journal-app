import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";
import useForm from "../hooks/useForm";
import validator from "validator";
import { removeError, setError } from "../../actions/ui";

const LoginScreen = () => {
  //get data from ui state
  const { msgError, loading } = useSelector((state) => state.ui);
  //reduc dispatch hooks to trigger the actions
  const dispatch = useDispatch();
  //customHook to manage form
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    //call the dispatch to trigger login action with uid and username params
    //wich will be returned later by firebase login backend function
    //dispatch(login(23432, "Jon Doe"));
    if (isFormValid()) {
      //using async function from thunk middleware
      dispatch(startLoginEmailPassword(email, password));
    }
  };
  //form validation function
  const isFormValid = () => {
    if (email.trim().length === 0) {
      dispatch(setError("email is required"));
      return false;
    }
    if (!validator.isEmail(email)) {
      dispatch(setError("email is not valid"));
      return false;
    }
    if (password.trim().length === 0) {
      dispatch(setError("password is required"));
      return false;
    }
    dispatch(removeError());
    return true;
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  const { email, password } = formValues;
  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}
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

        <button
          type="submit"
          //property depends of loading ui state value
          disabled={loading}
          className="btn btn-primary btn-block"
        >
          Login
        </button>

        <div className="auth__social-networks">
          <p>Login with </p>
          <div className="google-btn" onClick={handleGoogleLogin}>
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
