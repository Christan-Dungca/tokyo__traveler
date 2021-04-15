import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";

import styles from "./Login.module.scss";
import AuthContext from "../../context/auth-context";

const Login = ({ setToken }) => {
  const { register, errors, handleSubmit } = useForm();
  const history = useHistory();
  const { login } = useContext(AuthContext);

  const onFormSubmit = async (formData) => {
    const res = await axios.post(
      "http://localhost:5000/api/users/login",
      formData
    );
    console.log(res.data);
    setToken(res.data.token);
    login(res.data.data.user);
    history.push("/");
  };

  return (
    <div className={styles.Login}>
      <div className={styles.loginFormContainer}>
        <div className={styles.formHeader}>
          <h3> Welcome Back</h3>
          <h2> Log into your account</h2>
        </div>

        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className={styles.inputContainer}>
            <label htmlFor="email"> E-Mail </label>
            {errors.email && (
              <p className={styles.inputError}> A valid email is required </p>
            )}
            <input
              id="email"
              name="email"
              type="email"
              ref={register({ required: true })}
              placeholder="Enter your email or username"
            />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="password"> Password </label>
            {errors.password && (
              <p className={styles.inputError}>A valid password is required</p>
            )}
            <input
              id="password"
              name="password"
              ref={register({ required: true })}
              placeholder="Enter your password"
            />
          </div>

          <button> Login </button>
        </form>

        <div className={styles.registerContainer}>
          <p>Not Yet Registered? </p>
          <Link to="/signup"> Create an account &#8594; </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
