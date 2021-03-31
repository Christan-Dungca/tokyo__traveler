import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";

import styles from "./Signup.module.scss";

const Signup = ({ setToken }) => {
  const { register, errors, handleSubmit, getValues } = useForm();
  const history = useHistory();

  const onFormSubmit = async (formData) => {
    console.log(formData);
    const res = await axios.post(
      "http://localhost:3000/api/users/signup",
      formData
    );
    console.log(res.data);
    setToken(res.data.token);
    history.push("/");
  };

  return (
    <div className={styles.Signup}>
      <div className={styles.signupFormContainer}>
        <div className={styles.formHeader}>
          <h3> Welcome to Tokyo Traveler</h3>
          <h2>Create your account</h2>
        </div>

        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className={styles.inputContainer}>
            <div className={styles.labelErrorContainer}>
              <label htmlFor="name"> Name </label>
              {errors.name && (
                <p className={styles.inputError}> A valid name is required </p>
              )}
            </div>
            <input
              id="name"
              name="name"
              type="input"
              ref={register({ required: true })}
              placeholder="Enter your name or username"
            />
          </div>

          <div className={styles.inputContainer}>
            <div className={styles.labelErrorContainer}>
              <label htmlFor="email"> E-Mail </label>
              {errors.email && (
                <p className={styles.inputError}> A valid email is required </p>
              )}
            </div>
            <input
              id="email"
              name="email"
              type="email"
              ref={register({ required: true })}
              placeholder="Enter your email or username"
            />
          </div>

          <div className={styles.inputContainer}>
            <div className={styles.labelErrorContainer}>
              <label htmlFor="password"> Password </label>
              {errors.password && (
                <p className={styles.inputError}>
                  A valid password is required
                </p>
              )}
            </div>
            <input
              id="password"
              name="password"
              type="password"
              ref={register({ required: true })}
              placeholder="Enter your password"
            />
          </div>

          <div className={styles.inputContainer}>
            <div className={styles.labelErrorContainer}>
              <label htmlFor="confirmPassword"> Confirm Password </label>
              {errors.confirmPassword && (
                <p className={styles.inputError}>Your passwords must match</p>
              )}
            </div>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              ref={register({
                required: true,
                validate: (confirmPasswordValue) => {
                  const passwordValue = getValues("password");
                  const isMatch =
                    passwordValue !== confirmPasswordValue ? false : true;
                  return isMatch;
                },
              })}
              placeholder="Confirm your password"
            />
          </div>

          <button> Create Account </button>
        </form>

        <div className={styles.registerContainer}>
          <p>Have an account already? </p>
          <Link to="/login"> Log in &#8594; </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
