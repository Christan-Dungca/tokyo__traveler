import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import useHttpClient from "../../hooks/useHttp";
import AuthContext from "../../context/auth-context";
import styles from "./Login.module.scss";

const Login = ({ setToken }) => {
  const { sendRequest } = useHttpClient();
  const { register, errors, handleSubmit } = useForm();
  const { login } = useContext(AuthContext);
  const history = useHistory();

  const onFormSubmit = async (formData) => {
    console.log(formData);
    const response = await sendRequest(
      "http://localhost:5000/api/users/login",
      "POST",
      formData
    );

    // console.log(response);
    const token = response.token;
    const user = response.data.user;

    login(token, user);
    history.push("/");
  }; // Need to revamp useHttp to not send the data.data.object

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
              type="password"
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
