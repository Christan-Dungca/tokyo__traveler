import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import useHttpClient from "../../hooks/useHttp";
import AuthContext from "../../context/auth-context";
import styles from "./AddComment.module.scss";

const AddComment = () => {
  // use id for the request
  const { handleSubmit, register, errors, setValue } = useForm();
  let { id } = useParams();
  const { user, token } = useContext(AuthContext);
  const { sendRequest, isLoading } = useHttpClient();

  const handleFormSubmit = async (data) => {
    if (data.comment.length < 1) return;

    const { comment } = data;

    const response = await sendRequest(
      `http://localhost:5000/api/articles/${id}/comments`,
      "POST",
      { comment, user: user._id },
      { Authorization: `Bearer ${token}` }
    );
    setValue("comment", "");
    console.log(response);
  };
  
  return (
    <div className={styles.Comment}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className={styles.container}>
          <div className={styles.imgContainer}></div>
          <div className={styles.commentContainer}>
            <label htmlFor="comment">Post A Comment</label>
            {errors !== undefined && errors.comment && (
              <p className={styles.inputError}>
                A comment must be between 1-250 characters long
              </p>
            )}
            <input
              {...register("comment", {
                required: true,
                minLength: 1,
                maxLength: 255,
              })}
            />
          </div>
        </div>
        <button>Post Comment</button>
      </form>
    </div>
  );
};

export default AddComment;
