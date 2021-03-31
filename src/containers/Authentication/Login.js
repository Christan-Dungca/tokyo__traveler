import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import styles from "./Login.module.scss";

const Login = () => {
  const { register, errors, handleSubmit } = useForm();

  const onFormSubmit = async (formData) => {
    const res = await axios.post(
      "http://localhost:3000/api/users/login",
      formData
    );
    console.log(res);
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
            <label htmlFor="email"> E-Mail or Username </label>
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
          <a href="/">Register &#8594; </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
