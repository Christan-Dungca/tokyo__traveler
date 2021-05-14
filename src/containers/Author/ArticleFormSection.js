import React, { useState, useRef, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { BiImageAdd, BiFile, BiArrowBack } from "react-icons/bi";
import { MdRemoveCircleOutline } from "react-icons/md";
import clonedeep from "lodash.clonedeep";
import { useForm } from "react-hook-form";

import AuthContext from "../../context/auth-context";
import useHttpClient from "../../hooks/useHttp";
import styles from "./ArticleFormSection.module.scss";

const ArticleFormSection = () => {
  const [file, setFile] = useState(null);
  const [filePreviewUrl, setFilePreviewUrl] = useState();
  const [sections, setSections] = useState([{ heading: "", content: [true] }]);
  const [showWarning, setShowWarning] = useState(false);
  const { isLoading, error, clearError, sendRequest } = useHttpClient();
  const { token } = useContext(AuthContext);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const SectionRef = useRef();
  const imageInputRef = useRef();
  const { ref, ...rest } = register("image", { required: true });

  const imageValue = watch("image", null);
  useEffect(() => {
    if (!imageValue || imageValue.length < 1) return;

    // setting the imagePreviewUrl based on imageValue
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setFilePreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(imageValue[0]);

    // setting image name and file size
    let fileSize = imageValue[0].size;
    let formattedSize;
    if (fileSize < 1000000) {
      formattedSize = Math.floor(fileSize / 1000) + "KB";
    } else {
      formattedSize = Math.floor(fileSize / 1000000) + "MB";
    }

    // remove image value from form state
    setFile({
      size: formattedSize,
      name: imageValue[0].name,
    });
  }, [imageValue]);

  useEffect(() => {
    if (showWarning === true) {
      SectionRef.current.style.overflow = "hidden";
    } else {
      SectionRef.current.style.overflow = "unset";
    }
  }, [showWarning]);

  const handleFormSubmit = async (data) => {
    const { title, tags, image, introduction, sections } = data;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("tags", tags);
    formData.append("image", image[0]);
    formData.append("introduction", introduction);
    formData.append("sections", JSON.stringify(sections));

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    try {
      console.log(data);
      await sendRequest(
        `http://localhost:5000/api/articles`,
        "post",
        formData,
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleImagePicker = () => {
    imageInputRef.current.click();
    return;
  };

  const handleAddParagraph = (sectionIdx) => {
    const deepClonedObject = clonedeep(sections);
    deepClonedObject[sectionIdx].content.push(true);
    setSections(deepClonedObject);
    return;
  };

  const handleAddSection = (sectionIdx) => {
    const deepClonedObject = clonedeep(sections);
    deepClonedObject.push({ heading: "", content: [true] });
    setSections(deepClonedObject);
    return;
  };

  const handleRemoveImage = () => {
    // remove file, imageUrlPreview, set imageValue === null
    setFile(null);
    setFilePreviewUrl(null);
    setValue("image", "", { shouldValidate: true });
  };

  const handleBackClick = () => {
    setShowWarning(!showWarning);
  };

  const handleGoBack = () => {
    history.go(-1);
  };

  const toggleWarning = () => {
    setShowWarning(!showWarning);
  };

  return (
    <div className={styles.ArticleFormSection} ref={SectionRef}>
      {showWarning && (
        <div className={styles.WarningModal}>
          <div className={styles.modal}>
            <div className={styles.textContainer}>
              <h3>Are you sure you wanna leave?</h3>
              <p>
                You will lose all progress from this form. Do you still want to
                leave this page?
              </p>
            </div>
            <div className={styles.btnContainer}>
              <p onClick={handleGoBack} className={styles.modalBtnYes}>
                Leave Page
              </p>
              <p onClick={toggleWarning} className={styles.modalBtnNo}>
                Take Me Back
              </p>
            </div>
          </div>
          <div onClick={toggleWarning} className={styles.overlay}></div>
        </div>
      )}
      <div className={styles.backBtnContainer} onClick={handleBackClick}>
        <BiArrowBack className={styles.backBtn} />
      </div>
      <div className={styles.aboutSection}>
        <BiFile />
        <h1> New Article Form </h1>
        <p>
          Create a new blog post that can shine light on a topics relating to
          Japan
        </p>
      </div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className={styles.titleInputContainer}>
          <label htmlFor="title">Title Of Article</label>
          {errors.title && (
            <p className={styles.inputError}> A title is required</p>
          )}
          <input
            type="text"
            {...register("title", { required: true })}
            placeholder="Enter a title for your article"
          />
        </div>

        <div className={styles.imageSection}>
          <label htmlFor="image">Upload An Image</label>
          <input
            type="file"
            {...rest}
            ref={(e) => {
              ref(e);
              imageInputRef.current = e;
            }}
            name="image"
            accept="image/png, image/jpeg, image/jpg"
            className={styles.imageInput}
          />
          <p>File should be PNG, JPG, JPEG</p>
          {errors.image && (
            <p className={styles.inputError}> A valid image is required </p>
          )}
          <div className={styles.imageUpload} onClick={handleImagePicker}>
            <BiImageAdd />
            <p>
              Click To <span className={styles.underline}>Upload</span> An Image
            </p>
          </div>

          {imageValue && file !== null && (
            <div className={styles.imagePreviewContainer}>
              <div className={styles.imagePreview}>
                {filePreviewUrl && (
                  <img src={filePreviewUrl} alt="selected item" />
                )}
              </div>
              <div className={styles.imageInfo}>
                <p>{file.name}</p>
                <p>{file.size}</p>
              </div>
              <div
                className={styles.removeImgBtnContainer}
                onClick={handleRemoveImage}>
                <MdRemoveCircleOutline />
              </div>
            </div>
          )}
        </div>

        <div className={styles.tagInputContainer}>
          <label htmlFor="tags">Tag</label>
          <p>When would this blog post be most useful for the reader?</p>
          {errors.tags && (
            <p className={styles.inputError}>You must select one tag</p>
          )}
          <select {...register("tags", { required: true })}>
            <option value="">Select...</option>
            <option value="Before You Leave">Before You Leave</option>
            <option value="During Your Trip">During Your Stay</option>
          </select>
        </div>

        <div className={styles.introductionInputContainer}>
          <label htmlFor="introduction">Introduction</label>
          <p>
            Write an introduction for your article. Explain the reason for the
            article or try to give a personal experience with the issue
          </p>
          {errors.introduction && (
            <p className={styles.inputError}>
              An introduction for the article is required
            </p>
          )}
          <textarea
            {...register("introduction", { required: true })}></textarea>
        </div>

        <div className={styles.sectionsContainer}>
          <h3>Sections</h3>
          <p>
            Write the main content for your post here. Each section is made up
            of a title and paragraphs.
          </p>

          {sections.map((section, sidx) => {
            return (
              <div key={`${section}-${sidx}`} className={styles.section}>
                <label htmlFor={`sections.${sidx}.heading`}>
                  Section - {sidx + 1} Title
                </label>
                {errors.sections && (
                  <p className={styles.inputError}>
                    The section title is needed
                  </p>
                )}
                <input
                  {...register(`sections.${sidx}.heading`, { required: true })}
                />

                {section.content.map((para, pidx) => {
                  return (
                    <div
                      key={`${para}-${pidx}`}
                      className={styles.sectionParagraph}>
                      <label htmlFor={`sections.${sidx}.heading`}>
                        Section - {sidx + 1} -- Paragraph - {pidx + 1}
                      </label>
                      {errors.sections && (
                        <p className={styles.inputError}>
                          The section title is needed
                        </p>
                      )}
                      <textarea
                        {...register(`sections.${sidx}.content.${pidx}`, {
                          required: true,
                        })}
                      />
                    </div>
                  );
                })}

                <div
                  onClick={() => handleAddParagraph(sidx)}
                  className={styles.addParagraphBtn}>
                  <p>Add Paragraph To Section</p>
                </div>
              </div>
            );
          })}
          <div onClick={handleAddSection} className={styles.addSectionBtn}>
            <p>Add Another Section</p>
          </div>
        </div>
        <button className={styles.createArticleBtn}> Create Article </button>
      </form>
    </div>
  );
};

export default ArticleFormSection;
