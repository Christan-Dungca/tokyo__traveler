import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import AuthContext from "../../context/auth-context";
import styles from "./AddComment.module.scss";

const AddComment = () => {
  // use id for the request
  const { handleSubmit, register, error } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: "",
  });
  const { user } = useContext(AuthContext);
  let { id } = useParams();

  console.log(user);
  return (
    <div className={styles.Comment}>
      <form>
        <div className={styles.container}>
          <div className={styles.imgContainer}></div>
          <div className={styles.commentContainer}>
            <label htmlFor="comment">Post A Comment</label>
            <input
              {...register("comment", { required: true })}
              placeholder="Add your comment here..."></input>
          </div>
        </div>
        <button>Post Comment</button>
      </form>
    </div>
  );
};

export default AddComment;
