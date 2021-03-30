import React from "react";

import styles from "./Login.module.scss";

const Login = () => {
  return (
    <div className={styles.Login}>
      <div className={styles.loginFormContainer}>
        <div className={styles.formHeader}>
          <h3> Welcome Back</h3>
          <h2> Log into your account</h2>
        </div>

        <form>
          <div className={styles.inputContainer}>
            <label for="email"> E-Mail or Username </label>
            <input id="email" placeholder="Enter your email or username" />
          </div>

          <div className={styles.inputContainer}>
            <label for="password"> Password </label>
            <input id="password" placeholder="Enter your password" />
          </div>

          <button> Login </button>
        </form>

        <div className={styles.registerContainer}>
          <p>Not Yet Registered? </p>
          <a href="/">Register 	&#8594; </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
